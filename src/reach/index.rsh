'reach 0.1';

const Auctprops = {
  initateBid: Fun([], Object({
    nftId:Token,
    Timeout:UInt,
    minimumBud:UInt,
})),
}
const seeOutcome ={
seeOutcome:Fun([Address,UInt], Null),
}

const bidFunction = {
  bid:Fun([UInt],Tuple(Address,UInt))
}


export const main=Reach.App(() => {
    const Auctiooner = Participant('Auctiooner',{
               ...Auctprops,
          auctionReady: Fun([], Null),
          ...seeOutcome,
          seeBid:Fun([Address,UInt], Null)

    });
    const Bidder = API('Bidder', { 
      ...bidFunction
      });
     const Spectators = Participant('Winner', { 
      ...seeOutcome,
     
      })
     init();

     Auctiooner.only(() =>{
        const { nftId, Timeout,minimumBud} = declassify( interact.initateBid())
        })
        Auctiooner.publish(nftId, Timeout,minimumBud)
        .timeout(false);
         const amt = 2

        commit();
        Auctiooner.pay([[amt,nftId]]);
        Auctiooner.interact.auctionReady();
        assert(balance(nftId)== amt,"balance of NFT is wrong");
       
       const [ timeRemaining, keepGoing ] = makeDeadline(Timeout)
       
    
       //let them fight for bid
     const [ winner, currentPrice, isFirstBid  ] = 
     parallelReduce([ Auctiooner, minimumBud, true ])
     .invariant(balance(nftId) == amt )
       .invariant(balance() == (isFirstBid ? 0 : currentPrice))
       .while(keepGoing())
       .api_(Bidder.bid, (bid) =>{
        check(bid >= currentPrice );
        return [ bid, (notify) => {
        notify([winner, currentPrice]);
        if( !isFirstBid ){
            transfer(currentPrice).to(winner);
        }
        const who = this;
        Auctiooner.interact.seeBid(who,bid);
        return [who, bid, false];
        }]
       })
        .timeout(timeRemaining(), () => {
           Auctiooner.publish();
           return [ winner, currentPrice, isFirstBid ]
        })
      
        transfer(amt, nftId).to(winner);
        if( !isFirstBid ){
            transfer(currentPrice).to(Auctiooner);
        }

      each([Auctiooner,Spectators ], () =>  interact.seeOutcome(winner, currentPrice));
    commit();
    exit();
});
