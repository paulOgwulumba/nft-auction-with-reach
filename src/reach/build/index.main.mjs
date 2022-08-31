// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc5],
      5: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function _Bidder_makeBid5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_makeBid5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_makeBid5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Bidder_makeBid0_65: ctc8,
    Bidder_seeBids0_65: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v512, v513, v543, v544, v545, v546, v547, v553, v554] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc1, ctc1, ctc3, ctc5, ctc1, ctc7, ctc1]);
  const v565 = ctc.selfAddress();
  const v567 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:54:39:application call to [unknown function] (defined at: ./index.rsh:54:39:function exp)', 'at ./index.rsh:51:65:application call to "runBidder_makeBid0_65" (defined at: ./index.rsh:54:10:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:51:65:function exp)'],
    msg: 'in',
    who: 'Bidder_makeBid'
    });
  const v568 = v567[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v570 = stdlib.addressEq(v565, v512);
  const v571 = v570 ? false : true;
  stdlib.assert(v571, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:55:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:54:39:application call to [unknown function] (defined at: ./index.rsh:54:39:function exp)', 'at ./index.rsh:51:65:application call to "runBidder_makeBid0_65" (defined at: ./index.rsh:54:10:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:51:65:function exp)'],
    msg: 'The creator of the bid cannot make another bid',
    who: 'Bidder_makeBid'
    });
  const v578 = ['Bidder_makeBid0_65', v567];
  
  const txn1 = await (ctc.sendrecv({
    args: [v512, v513, v543, v544, v545, v546, v547, v553, v554, v578],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v568, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v605], secs: v607, time: v606, didSend: v297, from: v604 } = txn1;
      
      switch (v605[0]) {
        case 'Bidder_makeBid0_65': {
          const v608 = v605[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_makeBid"
            });
          const v613 = v608[stdlib.checkedBigNumberify('./index.rsh:54:10:spread', stdlib.UInt_max, '0')];
          const v624 = stdlib.add(v554, v613);
          sim_r.txns.push({
            amt: v613,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v631 = stdlib.gt(v613, v544);
          if (v631) {
            const v632 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v604), null);
            let v633;
            switch (v632[0]) {
              case 'None': {
                const v634 = v632[1];
                v633 = v613;
                
                break;
                }
              case 'Some': {
                const v635 = v632[1];
                const v636 = stdlib.add(v635, v613);
                v633 = v636;
                
                break;
                }
              }
            await stdlib.simMapSet(sim_r, 0, v604, v633);
            if (v546) {
              const v661 = [v604, v613, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v662 = await txn1.getOutput('Bidder_makeBid', 'v661', ctc11, v661);
              
              const v1225 = v613;
              const v1226 = v604;
              const v1227 = false;
              const v1228 = v606;
              const v1230 = v553;
              const v1231 = v624;
              const v1232 = stdlib.gt(v543, v547);
              if (v1232) {
                sim_r.isHalt = false;
                }
              else {
                const v1233 = v553[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
                const v1234 = v1233[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v604,
                  tok: v513
                  });
                const v1236 = stdlib.sub(v624, v624);
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v513
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v645 = stdlib.sub(v624, v544);
              sim_r.txns.push({
                kind: 'from',
                to: v545,
                tok: undefined /* Nothing */
                });
              const v646 = [v604, v613, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v647 = await txn1.getOutput('Bidder_makeBid', 'v646', ctc11, v646);
              
              const v1238 = v613;
              const v1239 = v604;
              const v1240 = false;
              const v1241 = v606;
              const v1243 = v553;
              const v1244 = v645;
              const v1245 = stdlib.gt(v543, v547);
              if (v1245) {
                sim_r.isHalt = false;
                }
              else {
                const v1246 = v553[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
                const v1247 = v1246[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v604,
                  tok: v513
                  });
                const v1249 = stdlib.sub(v645, v645);
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v513
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v676 = [v545, v544, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
            const v677 = await txn1.getOutput('Bidder_makeBid', 'v676', ctc11, v676);
            
            const v1251 = v544;
            const v1252 = v545;
            const v1253 = v546;
            const v1254 = v606;
            const v1256 = v553;
            const v1257 = v624;
            const v1258 = stdlib.gt(v543, v547);
            if (v1258) {
              sim_r.isHalt = false;
              }
            else {
              const v1259 = v553[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
              const v1260 = v1259[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v545,
                tok: v513
                });
              if (v546) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v513
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v1262 = stdlib.sub(v624, v624);
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v513
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'Bidder_seeBids0_65': {
          const v709 = v605[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc3, ctc5, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v605], secs: v607, time: v606, didSend: v297, from: v604 } = txn1;
  switch (v605[0]) {
    case 'Bidder_makeBid0_65': {
      const v608 = v605[1];
      undefined /* setApiDetails */;
      const v613 = v608[stdlib.checkedBigNumberify('./index.rsh:54:10:spread', stdlib.UInt_max, '0')];
      const v614 = stdlib.addressEq(v604, v512);
      const v615 = v614 ? false : true;
      stdlib.assert(v615, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:55:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:54:39:application call to [unknown function] (defined at: ./index.rsh:54:39:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:54:39:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:51:65:function exp)'],
        msg: 'The creator of the bid cannot make another bid',
        who: 'Bidder_makeBid'
        });
      const v624 = stdlib.add(v554, v613);
      ;
      const v631 = stdlib.gt(v613, v544);
      if (v631) {
        const v632 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v604), null);
        let v633;
        switch (v632[0]) {
          case 'None': {
            const v634 = v632[1];
            v633 = v613;
            
            break;
            }
          case 'Some': {
            const v635 = v632[1];
            const v636 = stdlib.add(v635, v613);
            v633 = v636;
            
            break;
            }
          }
        await stdlib.mapSet(map0, v604, v633);
        if (v546) {
          const v661 = [v604, v613, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v662 = await txn1.getOutput('Bidder_makeBid', 'v661', ctc11, v661);
          if (v297) {
            stdlib.protect(ctc0, await interact.out(v608, v662), {
              at: './index.rsh:54:11:application',
              fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:11:function exp)', 'at ./index.rsh:78:18:application call to "resolve" (defined at: ./index.rsh:57:36:function exp)', 'at ./index.rsh:57:36:application call to [unknown function] (defined at: ./index.rsh:57:36:function exp)'],
              msg: 'out',
              who: 'Bidder_makeBid'
              });
            }
          else {
            }
          
          const v1225 = v613;
          const v1226 = v604;
          const v1227 = false;
          const v1228 = v606;
          const v1230 = v553;
          const v1231 = v624;
          const v1232 = stdlib.gt(v543, v547);
          if (v1232) {
            return;
            }
          else {
            const v1233 = v553[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
            const v1234 = v1233[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
            ;
            const v1236 = stdlib.sub(v624, v624);
            ;
            ;
            return;
            }}
        else {
          const v645 = stdlib.sub(v624, v544);
          ;
          const v646 = [v604, v613, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v647 = await txn1.getOutput('Bidder_makeBid', 'v646', ctc11, v646);
          if (v297) {
            stdlib.protect(ctc0, await interact.out(v608, v647), {
              at: './index.rsh:54:11:application',
              fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:11:function exp)', 'at ./index.rsh:78:18:application call to "resolve" (defined at: ./index.rsh:57:36:function exp)', 'at ./index.rsh:57:36:application call to [unknown function] (defined at: ./index.rsh:57:36:function exp)'],
              msg: 'out',
              who: 'Bidder_makeBid'
              });
            }
          else {
            }
          
          const v1238 = v613;
          const v1239 = v604;
          const v1240 = false;
          const v1241 = v606;
          const v1243 = v553;
          const v1244 = v645;
          const v1245 = stdlib.gt(v543, v547);
          if (v1245) {
            return;
            }
          else {
            const v1246 = v553[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
            const v1247 = v1246[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
            ;
            const v1249 = stdlib.sub(v645, v645);
            ;
            ;
            return;
            }}}
      else {
        const v676 = [v545, v544, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v677 = await txn1.getOutput('Bidder_makeBid', 'v676', ctc11, v676);
        if (v297) {
          stdlib.protect(ctc0, await interact.out(v608, v677), {
            at: './index.rsh:54:11:application',
            fs: ['at ./index.rsh:54:11:application call to [unknown function] (defined at: ./index.rsh:54:11:function exp)', 'at ./index.rsh:83:18:application call to "resolve" (defined at: ./index.rsh:57:36:function exp)', 'at ./index.rsh:57:36:application call to [unknown function] (defined at: ./index.rsh:57:36:function exp)'],
            msg: 'out',
            who: 'Bidder_makeBid'
            });
          }
        else {
          }
        
        const v1251 = v544;
        const v1252 = v545;
        const v1253 = v546;
        const v1254 = v606;
        const v1256 = v553;
        const v1257 = v624;
        const v1258 = stdlib.gt(v543, v547);
        if (v1258) {
          return;
          }
        else {
          const v1259 = v553[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
          const v1260 = v1259[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
          ;
          if (v546) {
            ;
            return;
            }
          else {
            const v1262 = stdlib.sub(v624, v624);
            ;
            ;
            return;
            }}}
      break;
      }
    case 'Bidder_seeBids0_65': {
      const v709 = v605[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_seeBids5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_seeBids5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_seeBids5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    Bidder_makeBid0_65: ctc9,
    Bidder_seeBids0_65: ctc8
    });
  const ctc11 = stdlib.T_Tuple([ctc3, ctc1, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v512, v513, v543, v544, v545, v546, v547, v553, v554] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc3, ctc4, ctc1, ctc1, ctc3, ctc5, ctc1, ctc7, ctc1]);
  const v580 = ctc.selfAddress();
  const v582 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:89:30:application call to [unknown function] (defined at: ./index.rsh:89:30:function exp)', 'at ./index.rsh:51:65:application call to "runBidder_seeBids0_65" (defined at: ./index.rsh:89:10:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:51:65:function exp)'],
    msg: 'in',
    who: 'Bidder_seeBids'
    });
  const v583 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v580), null);
  let v584;
  switch (v583[0]) {
    case 'None': {
      const v585 = v583[1];
      v584 = false;
      
      break;
      }
    case 'Some': {
      const v586 = v583[1];
      v584 = true;
      
      break;
      }
    }
  stdlib.assert(v584, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:30:application call to [unknown function] (defined at: ./index.rsh:89:30:function exp)', 'at ./index.rsh:51:65:application call to "runBidder_seeBids0_65" (defined at: ./index.rsh:89:10:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:51:65:function exp)'],
    msg: 'Unauthorised! You have not made any bid in this auction.',
    who: 'Bidder_seeBids'
    });
  const v591 = ['Bidder_seeBids0_65', v582];
  
  let v600;
  switch (v583[0]) {
    case 'None': {
      const v601 = v583[1];
      v600 = false;
      
      break;
      }
    case 'Some': {
      const v602 = v583[1];
      v600 = true;
      
      break;
      }
    }
  stdlib.assert(v600, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:30:application call to [unknown function] (defined at: ./index.rsh:89:30:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:89:30:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:51:65:function exp)'],
    msg: 'Unauthorised! You have not made any bid in this auction.',
    who: 'Bidder_seeBids'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v512, v513, v543, v544, v545, v546, v547, v553, v554, v591],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:92:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v605], secs: v607, time: v606, didSend: v297, from: v604 } = txn1;
      
      switch (v605[0]) {
        case 'Bidder_makeBid0_65': {
          const v608 = v605[1];
          
          break;
          }
        case 'Bidder_seeBids0_65': {
          const v709 = v605[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_seeBids"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v604), null);
          ;
          const v798 = stdlib.addressEq(v604, v545);
          const v799 = v798 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v800 = [v545, v544, v799];
          const v801 = await txn1.getOutput('Bidder_seeBids', 'v800', ctc11, v800);
          
          const v1316 = v544;
          const v1317 = v545;
          const v1318 = v546;
          const v1319 = v606;
          const v1321 = v553;
          const v1322 = v554;
          const v1323 = stdlib.gt(v543, v547);
          if (v1323) {
            sim_r.isHalt = false;
            }
          else {
            const v1324 = v553[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
            const v1325 = v1324[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v545,
              tok: v513
              });
            if (v546) {
              sim_r.txns.push({
                kind: 'from',
                to: v512,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v513
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v1327 = stdlib.sub(v554, v554);
              sim_r.txns.push({
                kind: 'from',
                to: v512,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v512,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v513
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc1, ctc3, ctc5, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v605], secs: v607, time: v606, didSend: v297, from: v604 } = txn1;
  switch (v605[0]) {
    case 'Bidder_makeBid0_65': {
      const v608 = v605[1];
      return;
      break;
      }
    case 'Bidder_seeBids0_65': {
      const v709 = v605[1];
      undefined /* setApiDetails */;
      const v719 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v604), null);
      let v720;
      switch (v719[0]) {
        case 'None': {
          const v721 = v719[1];
          v720 = false;
          
          break;
          }
        case 'Some': {
          const v722 = v719[1];
          v720 = true;
          
          break;
          }
        }
      stdlib.assert(v720, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:30:application call to [unknown function] (defined at: ./index.rsh:89:30:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:89:30:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:51:65:function exp)'],
        msg: 'Unauthorised! You have not made any bid in this auction.',
        who: 'Bidder_seeBids'
        });
      ;
      let v794;
      switch (v719[0]) {
        case 'None': {
          const v795 = v719[1];
          v794 = false;
          
          break;
          }
        case 'Some': {
          const v796 = v719[1];
          v794 = true;
          
          break;
          }
        }
      stdlib.assert(v794, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:92:28:application call to [unknown function] (defined at: ./index.rsh:92:28:function exp)'],
        msg: 'Unauthorised! You have not made any bid in this auction.',
        who: 'Bidder_seeBids'
        });
      const v798 = stdlib.addressEq(v604, v545);
      const v799 = v798 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v800 = [v545, v544, v799];
      const v801 = await txn1.getOutput('Bidder_seeBids', 'v800', ctc11, v800);
      if (v297) {
        stdlib.protect(ctc0, await interact.out(v709, v801), {
          at: './index.rsh:89:11:application',
          fs: ['at ./index.rsh:89:11:application call to [unknown function] (defined at: ./index.rsh:89:11:function exp)', 'at ./index.rsh:94:16:application call to "resolve" (defined at: ./index.rsh:92:28:function exp)', 'at ./index.rsh:92:28:application call to [unknown function] (defined at: ./index.rsh:92:28:function exp)'],
          msg: 'out',
          who: 'Bidder_seeBids'
          });
        }
      else {
        }
      
      const v1316 = v544;
      const v1317 = v545;
      const v1318 = v546;
      const v1319 = v606;
      const v1321 = v553;
      const v1322 = v554;
      const v1323 = stdlib.gt(v543, v547);
      if (v1323) {
        return;
        }
      else {
        const v1324 = v553[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
        const v1325 = v1324[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
        ;
        if (v546) {
          ;
          return;
          }
        else {
          const v1327 = stdlib.sub(v554, v554);
          ;
          ;
          return;
          }}
      break;
      }
    }
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc1, ctc1]);
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Bidder_makeBid0_65: ctc5,
    Bidder_seeBids0_65: ctc6
    });
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc1, ctc1]);
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v498 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v499 = [v498];
  const v505 = stdlib.protect(ctc4, await interact.createBid(), {
    at: './index.rsh:35:76:application',
    fs: ['at ./index.rsh:34:15:application call to [unknown function] (defined at: ./index.rsh:34:19:function exp)'],
    msg: 'createBid',
    who: 'Creator'
    });
  const v506 = v505[stdlib.checkedBigNumberify('./index.rsh:35:76:application', stdlib.UInt_max, '0')];
  const v507 = v505[stdlib.checkedBigNumberify('./index.rsh:35:76:application', stdlib.UInt_max, '1')];
  const v508 = v505[stdlib.checkedBigNumberify('./index.rsh:35:76:application', stdlib.UInt_max, '2')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v506, v507, v508],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v513, v514, v515], secs: v517, time: v516, didSend: v35, from: v512 } = txn1;
      
      const v518 = v499[stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '0')];
      const v520 = v518[stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '1')];
      const v521 = v518[stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '2')];
      const v522 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v520, v521];
      const v523 = stdlib.Array_set(v499, stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '0'), v522);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v513
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v513, v514, v515], secs: v517, time: v516, didSend: v35, from: v512 } = txn1;
  const v518 = v499[stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '0')];
  const v520 = v518[stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '1')];
  const v521 = v518[stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '2')];
  const v522 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v520, v521];
  const v523 = stdlib.Array_set(v499, stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '0'), v522);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v512, v513, v514, v515, v516, v523],
    evt_cnt: 0,
    funcNum: 1,
    lct: v516,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:41:17:decimal', stdlib.UInt_max, '1'), v513]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v527, time: v526, didSend: v42, from: v525 } = txn2;
      
      ;
      const v528 = v523[stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '0')];
      const v529 = v528[stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '0')];
      const v530 = stdlib.add(v529, stdlib.checkedBigNumberify('./index.rsh:41:17:decimal', stdlib.UInt_max, '1'));
      const v533 = v528[stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '1')];
      const v534 = v528[stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '2')];
      const v535 = [v530, v533, v534];
      const v536 = stdlib.Array_set(v523, stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '0'), v535);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:41:17:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v513
        });
      
      const v543 = stdlib.add(v516, v514);
      const v544 = v515;
      const v545 = v512;
      const v546 = true;
      const v547 = v526;
      const v548 = v516;
      const v553 = v536;
      const v554 = stdlib.checkedBigNumberify('./index.rsh:32:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v559 = stdlib.gt(v543, v548);
        
        return v559;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v816 = v553[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
        const v817 = v816[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v545,
          tok: v513
          });
        if (v546) {
          sim_r.txns.push({
            kind: 'from',
            to: v512,
            tok: undefined /* Nothing */
            });
          const v862 = stdlib.addressEq(v545, v512);
          if (v862) {
            
            }
          else {
            
            }
          sim_r.txns.push({
            kind: 'halt',
            tok: v513
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v835 = stdlib.sub(v554, v554);
          sim_r.txns.push({
            kind: 'from',
            to: v512,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v512,
            tok: undefined /* Nothing */
            });
          const v841 = stdlib.addressEq(v545, v512);
          if (v841) {
            
            }
          else {
            
            }
          sim_r.txns.push({
            kind: 'halt',
            tok: v513
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc3, ctc1, ctc1, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v527, time: v526, didSend: v42, from: v525 } = txn2;
  ;
  const v528 = v523[stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '0')];
  const v529 = v528[stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '0')];
  const v530 = stdlib.add(v529, stdlib.checkedBigNumberify('./index.rsh:41:17:decimal', stdlib.UInt_max, '1'));
  const v533 = v528[stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '1')];
  const v534 = v528[stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '2')];
  const v535 = [v530, v533, v534];
  const v536 = stdlib.Array_set(v523, stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '0'), v535);
  ;
  const v537 = stdlib.addressEq(v512, v525);
  stdlib.assert(v537, {
    at: './index.rsh:41:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.auctionIsReady(), {
    at: './index.rsh:45:34:application',
    fs: ['at ./index.rsh:45:34:application call to [unknown function] (defined at: ./index.rsh:45:34:function exp)', 'at ./index.rsh:45:34:application call to "liftedInteract" (defined at: ./index.rsh:45:34:application)'],
    msg: 'auctionIsReady',
    who: 'Creator'
    });
  
  const v543 = stdlib.add(v516, v514);
  let v544 = v515;
  let v545 = v512;
  let v546 = true;
  let v547 = v526;
  let v548 = v516;
  let v553 = v536;
  let v554 = stdlib.checkedBigNumberify('./index.rsh:32:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v559 = stdlib.gt(v543, v548);
    
    return v559;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc7],
      timeoutAt: ['time', v543],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v512, v513, v543, v544, v545, v546, v547, v553, v554],
        evt_cnt: 0,
        funcNum: 4,
        lct: v547,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:100:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v812, time: v811, didSend: v421, from: v810 } = txn4;
          
          ;
          const cv544 = v544;
          const cv545 = v545;
          const cv546 = v546;
          const cv547 = v811;
          const cv548 = v547;
          const cv553 = v553;
          const cv554 = v554;
          
          await (async () => {
            const v544 = cv544;
            const v545 = cv545;
            const v546 = cv546;
            const v547 = cv547;
            const v548 = cv548;
            const v553 = cv553;
            const v554 = cv554;
            
            if (await (async () => {
              const v559 = stdlib.gt(v543, v548);
              
              return v559;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v816 = v553[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
              const v817 = v816[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v545,
                tok: v513
                });
              if (v546) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                const v862 = stdlib.addressEq(v545, v512);
                if (v862) {
                  
                  }
                else {
                  
                  }
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v513
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v835 = stdlib.sub(v554, v554);
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                const v841 = stdlib.addressEq(v545, v512);
                if (v841) {
                  
                  }
                else {
                  
                  }
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v513
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc8, ctc3, ctc1, ctc1, ctc8, ctc10, ctc1, ctc12, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v812, time: v811, didSend: v421, from: v810 } = txn4;
      ;
      const v813 = stdlib.addressEq(v512, v810);
      stdlib.assert(v813, {
        at: './index.rsh:100:17:dot',
        fs: ['at ./index.rsh:99:29:application call to [unknown function] (defined at: ./index.rsh:99:29:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv544 = v544;
      const cv545 = v545;
      const cv546 = v546;
      const cv547 = v811;
      const cv548 = v547;
      const cv553 = v553;
      const cv554 = v554;
      
      v544 = cv544;
      v545 = cv545;
      v546 = cv546;
      v547 = cv547;
      v548 = cv548;
      v553 = cv553;
      v554 = cv554;
      
      continue;
      }
    else {
      const {data: [v605], secs: v607, time: v606, didSend: v297, from: v604 } = txn3;
      switch (v605[0]) {
        case 'Bidder_makeBid0_65': {
          const v608 = v605[1];
          undefined /* setApiDetails */;
          const v613 = v608[stdlib.checkedBigNumberify('./index.rsh:54:10:spread', stdlib.UInt_max, '0')];
          const v614 = stdlib.addressEq(v604, v512);
          const v615 = v614 ? false : true;
          stdlib.assert(v615, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:55:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:54:39:application call to [unknown function] (defined at: ./index.rsh:54:39:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:54:39:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:51:65:function exp)'],
            msg: 'The creator of the bid cannot make another bid',
            who: 'Creator'
            });
          const v624 = stdlib.add(v554, v613);
          ;
          const v631 = stdlib.gt(v613, v544);
          if (v631) {
            const v632 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v604), null);
            let v633;
            switch (v632[0]) {
              case 'None': {
                const v634 = v632[1];
                v633 = v613;
                
                break;
                }
              case 'Some': {
                const v635 = v632[1];
                const v636 = stdlib.add(v635, v613);
                v633 = v636;
                
                break;
                }
              }
            await stdlib.mapSet(map0, v604, v633);
            stdlib.protect(ctc0, await interact.seeOutcome(v604, v613), {
              at: './index.rsh:71:32:application',
              fs: ['at ./index.rsh:70:15:application call to [unknown function] (defined at: ./index.rsh:70:40:function exp)', 'at ./index.rsh:57:36:application call to [unknown function] (defined at: ./index.rsh:57:36:function exp)'],
              msg: 'seeOutcome',
              who: 'Creator'
              });
            
            if (v546) {
              const v661 = [v604, v613, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              await txn3.getOutput('Bidder_makeBid', 'v661', ctc9, v661);
              const cv544 = v613;
              const cv545 = v604;
              const cv546 = false;
              const cv547 = v606;
              const cv548 = v547;
              const cv553 = v553;
              const cv554 = v624;
              
              v544 = cv544;
              v545 = cv545;
              v546 = cv546;
              v547 = cv547;
              v548 = cv548;
              v553 = cv553;
              v554 = cv554;
              
              continue;}
            else {
              const v645 = stdlib.sub(v624, v544);
              ;
              const v646 = [v604, v613, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              await txn3.getOutput('Bidder_makeBid', 'v646', ctc9, v646);
              const cv544 = v613;
              const cv545 = v604;
              const cv546 = false;
              const cv547 = v606;
              const cv548 = v547;
              const cv553 = v553;
              const cv554 = v645;
              
              v544 = cv544;
              v545 = cv545;
              v546 = cv546;
              v547 = cv547;
              v548 = cv548;
              v553 = cv553;
              v554 = cv554;
              
              continue;}}
          else {
            const v676 = [v545, v544, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
            await txn3.getOutput('Bidder_makeBid', 'v676', ctc9, v676);
            const cv544 = v544;
            const cv545 = v545;
            const cv546 = v546;
            const cv547 = v606;
            const cv548 = v547;
            const cv553 = v553;
            const cv554 = v624;
            
            v544 = cv544;
            v545 = cv545;
            v546 = cv546;
            v547 = cv547;
            v548 = cv548;
            v553 = cv553;
            v554 = cv554;
            
            continue;}
          break;
          }
        case 'Bidder_seeBids0_65': {
          const v709 = v605[1];
          undefined /* setApiDetails */;
          const v719 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v604), null);
          let v720;
          switch (v719[0]) {
            case 'None': {
              const v721 = v719[1];
              v720 = false;
              
              break;
              }
            case 'Some': {
              const v722 = v719[1];
              v720 = true;
              
              break;
              }
            }
          stdlib.assert(v720, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:30:application call to [unknown function] (defined at: ./index.rsh:89:30:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:89:30:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:51:65:function exp)'],
            msg: 'Unauthorised! You have not made any bid in this auction.',
            who: 'Creator'
            });
          ;
          let v794;
          switch (v719[0]) {
            case 'None': {
              const v795 = v719[1];
              v794 = false;
              
              break;
              }
            case 'Some': {
              const v796 = v719[1];
              v794 = true;
              
              break;
              }
            }
          stdlib.assert(v794, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:92:28:application call to [unknown function] (defined at: ./index.rsh:92:28:function exp)'],
            msg: 'Unauthorised! You have not made any bid in this auction.',
            who: 'Creator'
            });
          const v798 = stdlib.addressEq(v604, v545);
          const v799 = v798 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v800 = [v545, v544, v799];
          await txn3.getOutput('Bidder_seeBids', 'v800', ctc9, v800);
          const cv544 = v544;
          const cv545 = v545;
          const cv546 = v546;
          const cv547 = v606;
          const cv548 = v547;
          const cv553 = v553;
          const cv554 = v554;
          
          v544 = cv544;
          v545 = cv545;
          v546 = cv546;
          v547 = cv547;
          v548 = cv548;
          v553 = cv553;
          v554 = cv554;
          
          continue;
          break;
          }
        }}
    
    }
  const v816 = v553[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
  const v817 = v816[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
  ;
  if (v546) {
    ;
    const v862 = stdlib.addressEq(v545, v512);
    if (v862) {
      stdlib.protect(ctc0, await interact.seeWinner(v545, v544, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2')), {
        at: './index.rsh:28:25:application',
        fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:113:16:application call to "seeWinner" (defined at: ./index.rsh:26:48:function exp)'],
        msg: 'seeWinner',
        who: 'Creator'
        });
      
      }
    else {
      stdlib.protect(ctc0, await interact.seeWinner(v545, v544, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3')), {
        at: './index.rsh:28:25:application',
        fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:116:16:application call to "seeWinner" (defined at: ./index.rsh:26:48:function exp)'],
        msg: 'seeWinner',
        who: 'Creator'
        });
      
      }
    return;
    }
  else {
    const v835 = stdlib.sub(v554, v554);
    ;
    ;
    const v841 = stdlib.addressEq(v545, v512);
    if (v841) {
      stdlib.protect(ctc0, await interact.seeWinner(v545, v544, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2')), {
        at: './index.rsh:28:25:application',
        fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:113:16:application call to "seeWinner" (defined at: ./index.rsh:26:48:function exp)'],
        msg: 'seeWinner',
        who: 'Creator'
        });
      
      }
    else {
      stdlib.protect(ctc0, await interact.seeWinner(v545, v544, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3')), {
        at: './index.rsh:28:25:application',
        fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:116:16:application call to "seeWinner" (defined at: ./index.rsh:26:48:function exp)'],
        msg: 'seeWinner',
        who: 'Creator'
        });
      
      }
    return;
    }
  
  
  
  };
export async function Observer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Observer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Observer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Bidder_makeBid0_65: ctc4,
    Bidder_seeBids0_65: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc1, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v498 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v499 = [v498];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc3, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v513, v514, v515], secs: v517, time: v516, didSend: v35, from: v512 } = txn1;
  const v518 = v499[stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '0')];
  const v520 = v518[stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '1')];
  const v521 = v518[stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '2')];
  const v522 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v520, v521];
  const v523 = stdlib.Array_set(v499, stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '0'), v522);
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v527, time: v526, didSend: v42, from: v525 } = txn2;
  ;
  const v528 = v523[stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '0')];
  const v529 = v528[stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '0')];
  const v530 = stdlib.add(v529, stdlib.checkedBigNumberify('./index.rsh:41:17:decimal', stdlib.UInt_max, '1'));
  const v533 = v528[stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '1')];
  const v534 = v528[stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '2')];
  const v535 = [v530, v533, v534];
  const v536 = stdlib.Array_set(v523, stdlib.checkedBigNumberify('./index.rsh:41:11:dot', stdlib.UInt_max, '0'), v535);
  ;
  const v537 = stdlib.addressEq(v512, v525);
  stdlib.assert(v537, {
    at: './index.rsh:41:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Observer'
    });
  const v543 = stdlib.add(v516, v514);
  let v544 = v515;
  let v545 = v512;
  let v546 = true;
  let v547 = v526;
  let v548 = v516;
  let v553 = v536;
  let v554 = stdlib.checkedBigNumberify('./index.rsh:32:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v559 = stdlib.gt(v543, v548);
    
    return v559;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: ['time', v543],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v812, time: v811, didSend: v421, from: v810 } = txn4;
      ;
      const v813 = stdlib.addressEq(v512, v810);
      stdlib.assert(v813, {
        at: './index.rsh:100:17:dot',
        fs: ['at ./index.rsh:99:29:application call to [unknown function] (defined at: ./index.rsh:99:29:function exp)'],
        msg: 'sender correct',
        who: 'Observer'
        });
      const cv544 = v544;
      const cv545 = v545;
      const cv546 = v546;
      const cv547 = v811;
      const cv548 = v547;
      const cv553 = v553;
      const cv554 = v554;
      
      v544 = cv544;
      v545 = cv545;
      v546 = cv546;
      v547 = cv547;
      v548 = cv548;
      v553 = cv553;
      v554 = cv554;
      
      continue;
      }
    else {
      const {data: [v605], secs: v607, time: v606, didSend: v297, from: v604 } = txn3;
      switch (v605[0]) {
        case 'Bidder_makeBid0_65': {
          const v608 = v605[1];
          undefined /* setApiDetails */;
          const v613 = v608[stdlib.checkedBigNumberify('./index.rsh:54:10:spread', stdlib.UInt_max, '0')];
          const v614 = stdlib.addressEq(v604, v512);
          const v615 = v614 ? false : true;
          stdlib.assert(v615, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:55:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:54:39:application call to [unknown function] (defined at: ./index.rsh:54:39:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:54:39:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:51:65:function exp)'],
            msg: 'The creator of the bid cannot make another bid',
            who: 'Observer'
            });
          const v624 = stdlib.add(v554, v613);
          ;
          const v631 = stdlib.gt(v613, v544);
          if (v631) {
            const v632 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v604), null);
            let v633;
            switch (v632[0]) {
              case 'None': {
                const v634 = v632[1];
                v633 = v613;
                
                break;
                }
              case 'Some': {
                const v635 = v632[1];
                const v636 = stdlib.add(v635, v613);
                v633 = v636;
                
                break;
                }
              }
            await stdlib.mapSet(map0, v604, v633);
            stdlib.protect(ctc0, await interact.seeOutcome(v604, v613), {
              at: './index.rsh:71:32:application',
              fs: ['at ./index.rsh:70:15:application call to [unknown function] (defined at: ./index.rsh:70:40:function exp)', 'at ./index.rsh:57:36:application call to [unknown function] (defined at: ./index.rsh:57:36:function exp)'],
              msg: 'seeOutcome',
              who: 'Observer'
              });
            
            if (v546) {
              const v661 = [v604, v613, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              await txn3.getOutput('Bidder_makeBid', 'v661', ctc8, v661);
              const cv544 = v613;
              const cv545 = v604;
              const cv546 = false;
              const cv547 = v606;
              const cv548 = v547;
              const cv553 = v553;
              const cv554 = v624;
              
              v544 = cv544;
              v545 = cv545;
              v546 = cv546;
              v547 = cv547;
              v548 = cv548;
              v553 = cv553;
              v554 = cv554;
              
              continue;}
            else {
              const v645 = stdlib.sub(v624, v544);
              ;
              const v646 = [v604, v613, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              await txn3.getOutput('Bidder_makeBid', 'v646', ctc8, v646);
              const cv544 = v613;
              const cv545 = v604;
              const cv546 = false;
              const cv547 = v606;
              const cv548 = v547;
              const cv553 = v553;
              const cv554 = v645;
              
              v544 = cv544;
              v545 = cv545;
              v546 = cv546;
              v547 = cv547;
              v548 = cv548;
              v553 = cv553;
              v554 = cv554;
              
              continue;}}
          else {
            const v676 = [v545, v544, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
            await txn3.getOutput('Bidder_makeBid', 'v676', ctc8, v676);
            const cv544 = v544;
            const cv545 = v545;
            const cv546 = v546;
            const cv547 = v606;
            const cv548 = v547;
            const cv553 = v553;
            const cv554 = v624;
            
            v544 = cv544;
            v545 = cv545;
            v546 = cv546;
            v547 = cv547;
            v548 = cv548;
            v553 = cv553;
            v554 = cv554;
            
            continue;}
          break;
          }
        case 'Bidder_seeBids0_65': {
          const v709 = v605[1];
          undefined /* setApiDetails */;
          const v719 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v604), null);
          let v720;
          switch (v719[0]) {
            case 'None': {
              const v721 = v719[1];
              v720 = false;
              
              break;
              }
            case 'Some': {
              const v722 = v719[1];
              v720 = true;
              
              break;
              }
            }
          stdlib.assert(v720, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:89:30:application call to [unknown function] (defined at: ./index.rsh:89:30:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:89:30:function exp)', 'at ./index.rsh:51:65:application call to [unknown function] (defined at: ./index.rsh:51:65:function exp)'],
            msg: 'Unauthorised! You have not made any bid in this auction.',
            who: 'Observer'
            });
          ;
          let v794;
          switch (v719[0]) {
            case 'None': {
              const v795 = v719[1];
              v794 = false;
              
              break;
              }
            case 'Some': {
              const v796 = v719[1];
              v794 = true;
              
              break;
              }
            }
          stdlib.assert(v794, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:92:28:application call to [unknown function] (defined at: ./index.rsh:92:28:function exp)'],
            msg: 'Unauthorised! You have not made any bid in this auction.',
            who: 'Observer'
            });
          const v798 = stdlib.addressEq(v604, v545);
          const v799 = v798 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v800 = [v545, v544, v799];
          await txn3.getOutput('Bidder_seeBids', 'v800', ctc8, v800);
          const cv544 = v544;
          const cv545 = v545;
          const cv546 = v546;
          const cv547 = v606;
          const cv548 = v547;
          const cv553 = v553;
          const cv554 = v554;
          
          v544 = cv544;
          v545 = cv545;
          v546 = cv546;
          v547 = cv547;
          v548 = cv548;
          v553 = cv553;
          v554 = cv554;
          
          continue;
          break;
          }
        }}
    
    }
  const v816 = v553[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
  const v817 = v816[stdlib.checkedBigNumberify('./index.rsh:104:21:application', stdlib.UInt_max, '0')];
  ;
  if (v546) {
    ;
    const v862 = stdlib.addressEq(v545, v512);
    if (v862) {
      stdlib.protect(ctc0, await interact.seeWinner(v545, v544, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2')), {
        at: './index.rsh:28:25:application',
        fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:113:16:application call to "seeWinner" (defined at: ./index.rsh:26:48:function exp)'],
        msg: 'seeWinner',
        who: 'Observer'
        });
      
      }
    else {
      stdlib.protect(ctc0, await interact.seeWinner(v545, v544, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3')), {
        at: './index.rsh:28:25:application',
        fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:116:16:application call to "seeWinner" (defined at: ./index.rsh:26:48:function exp)'],
        msg: 'seeWinner',
        who: 'Observer'
        });
      
      }
    return;
    }
  else {
    const v835 = stdlib.sub(v554, v554);
    ;
    ;
    const v841 = stdlib.addressEq(v545, v512);
    if (v841) {
      stdlib.protect(ctc0, await interact.seeWinner(v545, v544, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2')), {
        at: './index.rsh:28:25:application',
        fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:113:16:application call to "seeWinner" (defined at: ./index.rsh:26:48:function exp)'],
        msg: 'seeWinner',
        who: 'Observer'
        });
      
      }
    else {
      stdlib.protect(ctc0, await interact.seeWinner(v545, v544, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3')), {
        at: './index.rsh:28:25:application',
        fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:34:function exp)', 'at ./index.rsh:116:16:application call to "seeWinner" (defined at: ./index.rsh:26:48:function exp)'],
        msg: 'seeWinner',
        who: 'Observer'
        });
      
      }
    return;
    }
  
  
  
  };
export async function Bidder_makeBid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_makeBid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_makeBid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bidder_makeBid5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_seeBids(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_seeBids expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_seeBids expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bidder_seeBids5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_makeBid(uint64)(address,uint64,uint64)`, `Bidder_seeBids()(address,uint64,uint64)`],
    pure: [],
    sigs: [`Bidder_makeBid(uint64)(address,uint64,uint64)`, `Bidder_seeBids()(address,uint64,uint64)`]
    },
  appApproval: `BiANAAEIBAUoIDAJr6mMiw5ZcqCNBiYEAQAAAQEIAAAAAAAAAAEiNQAxGEEE9ClkSSJbNQEkWzUCMRkjEkEACjEAKCEIr2ZCBME2GgAXSUEAMiI1BCM1BkkhCQxAABEhCRJEKTX/KjT/UCSvUEIAk4Hti8vCAhJENhoBNf8oNP9QQgB/NhoCFzUENhoDNhoBF0mBAwxAAlJJJQxAAGQlEkQhBDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQVbNf6ABJEnNPOwMgY0/g9ENP8xABJENP80AyEGWzT+NAMhB1s0A1c4IDQDV1gBFzIGNAMhCls0A1dhETQDIQtbQgL6SCEENAESRDQESSISTDQCEhFEKGRJNQNJSkpKSVcAIDX/IQZbNf4hBVs1/SEHWzX8VzggNftXWAEXNfohCls1+VdhETX4IQtbNfdJNQU19oAEkfGnmjT2ULAyBjT9DEQ09iJVQAELNPZXAQg19TT1FzX0MQA0/xNENPc09Ag18zT0iAPJNPQ0/A1BALAxAIgDrUk18SJVQAAHNPQ18kIADzTxI1tJNfA09Ag18kIAADEAKCo08hZQZjT6QQA2gAgAAAAAAAAClTEANPQWUCSvUFCwMQA09BZQJK9QNQc0/zT+NP009DEAIjIGNPk0+DTzQgIHsSKyATT8sggjshA0+7IHs4AIAAAAAAAAAoYxADT0FlAkr1BQsDEANPQWUCSvUDUHNP80/jT9NPQxACIyBjT5NPg08zT8CUIBvoAIAAAAAAAAAqQ0+zT8FlArUFCwNPs0/BZQK1A1BzT/NP40/TT8NPs0+jIGNPk0+DTzQgGJMQCIAshJNfUiVUAABiI19EIABiM19EIAADT0RDT1IlVAAAYiNfNCAAYjNfNCAAA080SACAAAAAAAAAMgNPs0/BZQIyIxADT7Ek0WUFCwNPs0/BZQIyIxADT7Ek0WUDUHNP80/jT9NPw0+zT6MgY0+TT4NPdCARJJIwxAAHcjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQZbNf6BOFs1/VdAETX8gASai5F0sDT8VwARNfsjNP6IAjU0/zEAEkQ0/zT+NP00AyEFWwg0AyEHWzT/IzIGNP00+yJbIwgWNPtXCAhQNPtXEAFQIkIAlUghDIgB4iI0ARJENARJIhJMNAISEURJNQVJSSJbNf8kWzX+gRBbNf2ABPdxE000/xZQNP4WUDT9FlCwgRGvSTX8VwARNfskrzT7VwgIUDT7VxABUDX6IQyIAY2xIrIBIrISJbIQMgqyFDT/shGzMQA0/xZQNP4WUDT9FlAyBhZQNPpQKEsBVwBRZ0gjNQEyBjUCQgDyNf81/jX9Nfw1+zX6Nfk1+DX3NfY0+DT9DUEANjT2NPcWUDT4FlA0+RZQNPpQNPsWUQcIUDT8FlA0/lA0/xZQKEsBVwB6Z0ghBDUBMgY1AkIAoLEisgE0/lcAESJbshIlshA0+rIUNPeyEbM0+0EAKrEisgE0/7III7IQNPayB7OxIrIBIrISJbIQMgmyFTIKshQ097IRs0IAPLEisgE0/7III7IQNPayB7OxIrIBNP9JCbIII7IQNPayB7OxIrIBIrISJbIQMgmyFTIKshQ097IRs0IAADEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghCK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 1,
  stateSize: 122,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v513",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v514",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v515",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v513",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v514",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v515",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_Bidder_makeBid0_65",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bidder_seeBids0_65",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T14",
                "name": "v605",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v646",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v661",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v676",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v800",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bidder_makeBid",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T15",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bidder_seeBids",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T15",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_Bidder_makeBid0_65",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bidder_seeBids0_65",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T14",
                "name": "v605",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620024da380380620024da833981016040819052620000269162000429565b6000805543600355620000386200024e565b6040805133815283516020808301919091528085015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f89290620001a1565b60608201526200010b3415600762000224565b62000115620002b5565b33815260208084018051516001600160a01b0316828401528051820151604080850191909152905181015160608085019190915243608085018190529085015160a08501526001600081905555516200017191839101620004eb565b6040516020818303038152906040526002908051906020019062000197929190620002ff565b50505050620005dd565b620001ab6200038e565b60005b60018110156200020157848160018110620001cd57620001cd620004d5565b6020020151828260018110620001e757620001e7620004d5565b602002015280620001f88162000576565b915050620001ae565b5081818460018110620002185762000218620004d5565b60200201529392505050565b816200024a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152815260208101620002816200038e565b81526040805160608101825260008082526020828101829052928201529101908152602001620002b06200038e565b905290565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001620002b06200038e565b8280546200030d90620005a0565b90600052602060002090601f0160209004810192826200033157600085556200037c565b82601f106200034c57805160ff19168380011785556200037c565b828001600101855582156200037c579182015b828111156200037c5782518255916020019190600101906200035f565b506200038a929150620003db565b5090565b60405180602001604052806001905b620003c4604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200039d5790505090565b5b808211156200038a5760008155600101620003dc565b604051606081016001600160401b03811182821017156200042357634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200043d57600080fd5b604080519081016001600160401b03811182821017156200046e57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200048857600080fd5b62000492620003f2565b60208501519092506001600160a01b0381168114620004b057600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151818501526080808601519085015260a0858101516101008601949291860160005b60018110156200056a578251805183528581015186840152860151151586830152918401919083019060010162000538565b50505050505092915050565b60006000198214156200059957634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620005b557607f821691505b60208210811415620005d757634e487b7160e01b600052602260045260246000fd5b50919050565b611eed80620005ed6000396000f3fe6080604052600436106100845760003560e01c8063832307571161005657806383230757146101065780639afd0bea1461011b578063a7661d541461012e578063ab53f2c614610141578063b97808951461016457005b80631e93b0f11461008d5780632c10a159146100b157806336f1ede4146100c45780633bc5b7bf146100d957005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf3660046117ba565b610177565b6100cc61019b565b6040516100a891906117d2565b3480156100e557600080fd5b506100f96100f4366004611811565b6101d1565b6040516100a89190611862565b34801561011257600080fd5b5060015461009e565b61008b610129366004611892565b6101fd565b61008b61013c3660046117ba565b61021d565b34801561014d57600080fd5b5061015661023d565b6040516100a89291906118d0565b6100cc61017236600461190a565b6102da565b61017f61147b565b610197610191368490038401846119da565b82610317565b5050565b6101a36114a0565b6101ab6114ca565b602081015151600190526101bd61147b565b6101c78282610589565b6020015192915050565b60408051606081018252600080825260208201819052918101919091526101f782610d22565b92915050565b61020561147b565b61019761021736849003840184611a30565b82610589565b61022561147b565b610197610237368490038401846119da565b82610df5565b60006060600054600280805461025290611ad5565b80601f016020809104026020016040519081016040528092919081815260200182805461027e90611ad5565b80156102cb5780601f106102a0576101008083540402835291602001916102cb565b820191906000526020600020905b8154815290600101906020018083116102ae57829003601f168201915b50505050509050915091509091565b6102e26114a0565b6102ea6114ca565b6020818101805151600090525151015183905261030561147b565b61030f8282610589565b519392505050565b610327600160005414600b610fda565b815161034290158061033b57508251600154145b600c610fda565b60008080556002805461035490611ad5565b80601f016020809104026020016040519081016040528092919081815260200182805461038090611ad5565b80156103cd5780601f106103a2576101008083540402835291602001916103cd565b820191906000526020600020905b8154815290600101906020018083116103b057829003601f168201915b50505050508060200190518101906103e59190611ba9565b905061040e60408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161046134156008610fda565b60a0820151515161047490600190611c67565b81515260a08201805151602090810151835182015290515160409081015183519015159101528201516104b5906104ae9033906001611000565b6009610fda565b81516104cd906001600160a01b03163314600a610fda565b6104d56114e4565b825181516001600160a01b03918216905260208085015183519216910152604083015160808401516105079190611c67565b81516040908101919091526060808501516020808501805192909252865182516001600160a01b03909116910152805160019301929092528151439101526080808501519151015260a083015182516105639190600090611018565b60208201805160a0019190915251600060c0909101526105828161108c565b5050505050565b6105996005600054146012610fda565b81516105b49015806105ad57508251600154145b6013610fda565b6000808055600280546105c690611ad5565b80601f01602080910402602001604051908101604052809291908181526020018280546105f290611ad5565b801561063f5780601f106106145761010080835404028352916020019161063f565b820191906000526020600020905b81548152906001019060200180831161062257829003601f168201915b50505050508060200190518101906106579190611c7f565b9050610661611514565b610672826040015143106014610fda565b7f39ae3ba5ee3db2e9c76c06676722712e4f649f643eb75593d77bfa217c7b420033856040516106a3929190611d1c565b60405180910390a160006020850151515160018111156106c5576106c561182e565b1415610afb57602084810151510151815281516106fc906001600160a01b031633146106f25760016106f5565b60005b600d610fda565b80515161010083015161070f9190611c67565b6020820152805151610724903414600e610fda565b606082015181515111156109f257600061073d33610d22565b51600181111561074f5761074f61182e565b14156107625780515160408201526107ab565b600161076d33610d22565b51600181111561077f5761077f61182e565b14156107ab5761078e33610d22565b60400151606082018190528151516107a591611c67565b60408201525b3360009081526004602052604090819020805460ff1916600190811782559183015191015560a0820151156108bf5760a08101805133905281515181516020015280516000604091820152905190517ffb8b553fed493d7b1d01b0f2b16e962ffa026cd57182383c6c1362de4bd169d091610825916117d2565b60405180910390a160a0810151835261083c6114e4565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152835151828401805191909152805133908401528051600092019190915280514360609091015260c08086015182516080015260e0860151825160a00152918401519051909101526108b98161108c565b50610d1c565b81608001516001600160a01b03166108fc83606001519081150290604051600060405180830381858888f19350505050158015610900573d6000803e3d6000fd5b5060808101805133905281515181516020015280516000604091820152905190517f6130991d7be359521b2c285160f6c0f89085abc0c01390e65b254aa0005bde919161094c916117d2565b60405180910390a1608081015183526109636114e4565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152835151828401805191909152805133908401528051600092019190915280514360609182015260c086015182516080015260e0860151915160a00191909152840151908301516109e09190611d6e565b602082015160c001526108b98161108c565b608082015160c0820180516001600160a01b03909216909152606083015181516020015280516001604091820152905190517f636ad344b3c7a9553ab19bddb5aa66945908cb913e812c028cc15379472dfd9b91610a4f916117d2565b60405180910390a160c08101518352610a666114e4565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151838601805191909152608080890151825196169585019590955260a080890151825190151594019390935280514392019190915260c08088015182519095019490945260e0870151815190920191909152908401519051909101526108b98161108c565b6001602085015151516001811115610b1557610b1561182e565b1415610d1c57610b2433610d22565b60e08201819052516000906001811115610b4057610b4061182e565b1415610b53576000610100820152610b7b565b600160e0820151516001811115610b6c57610b6c61182e565b1415610b7b5760016101008201525b610b8b816101000151600f610fda565b610b9734156010610fda565b600060e0820151516001811115610bb057610bb061182e565b1415610bc3576000610120820152610beb565b600160e0820151516001811115610bdc57610bdc61182e565b1415610beb5760016101208201525b610bfb8161012001516011610fda565b608082018051610140830180516001600160a01b03928316905260608501519051602001529051163314610c30576001610c33565b60005b610140820180516040908101929092525190517f7f2755ea8900539c59ccc9723e1c5866b18bd81bddaa7996c62ff35578160dd591610c71916117d2565b60405180910390a16101408101516020840152610c8c6114e4565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845182015260608087015183860180519190915260808089015182519616959094019490945260a080880151855190151593019290925283514391015260c08087015184519093019290925260e0860151835190910152610100850151915101526108b98161108c565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610d6e57610d6e61182e565b1415610de5576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610daf57610daf61182e565b6001811115610dc057610dc061182e565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b610e056005600054146017610fda565b8151610e20901580610e1957508251600154145b6018610fda565b600080805560028054610e3290611ad5565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5e90611ad5565b8015610eab5780601f10610e8057610100808354040283529160200191610eab565b820191906000526020600020905b815481529060010190602001808311610e8e57829003601f168201915b5050505050806020019051810190610ec39190611c7f565b9050610ed781604001514310156019610fda565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a1610f2a34156015610fda565b8051610f42906001600160a01b031633146016610fda565b610f4a6114e4565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845182015260608086015183860180519190915260808088015182519616959094019490945260a080870151855190151593019290925283514391015260c08086015184519093019290925260e085015183519091015261010084015191510152610d1c8161108c565b816101975760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061100e83853085611281565b90505b9392505050565b6110206115a3565b60005b600181101561106c5784816001811061103e5761103e611c3b565b602002015182826001811061105557611055611c3b565b60200201528061106481611d85565b915050611023565b508181846001811061108057611080611c3b565b60200201529392505050565b6020810151608001518151604001511115611164576110a96115ee565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152818501805151606080870191909152815184015190941660808601528051820151151560a08087019190915281519094015160c08087019190915281519094015160e08601525190920151610100840152600560005543600155905161113b91839101611dde565b6040516020818303038152906040526002908051906020019061115f92919061165d565b505050565b8051602090810151818301519182015160a0909201515151611186929061135b565b806020015160400151156111f057805151602082015160c001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156111d6573d6000803e3d6000fd5b50600080805560018190556111ed906002906116e1565b50565b805151602082015160c001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611232573d6000803e3d6000fd5b50805151602082015160c001516001600160a01b03909116906108fc906112599080611d6e565b6040518115909202916000818181858888f193505050501580156111d6573d6000803e3d6000fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916112e891611e7e565b60006040518083038185875af1925050503d8060008114611325576040519150601f19603f3d011682016040523d82523d6000602084013e61132a565b606091505b509150915061133b8282600161136f565b50808060200190518101906113509190611e9a565b979650505050505050565b6113668383836113aa565b61115f57600080fd5b6060831561137e575081611011565b82511561138e5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610ff7565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161140991611e7e565b60006040518083038185875af1925050503d8060008114611446576040519150601f19603f3d011682016040523d82523d6000602084013e61144b565b606091505b509150915061145c8282600261136f565b50808060200190518101906114719190611e9a565b9695505050505050565b604051806040016040528061148e6114a0565b815260200161149b6114a0565b905290565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b60405180604001604052806000815260200161149b61171b565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161149b61172e565b604080516101808101909152600061016082019081528190815260200160008152602001600081526020016000815260200161154e6114a0565b815260200161155b6114a0565b81526020016115686114a0565b81526040805160608101825260008082526020828101829052928201529101908152600060208201819052604082015260600161149b6114a0565b60405180602001604052806001905b6115d8604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816115b25790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600015158152602001600081526020016116506115a3565b8152602001600081525090565b82805461166990611ad5565b90600052602060002090601f01602090048101928261168b57600085556116d1565b82601f106116a457805160ff19168380011785556116d1565b828001600101855582156116d1579182015b828111156116d15782518255916020019190600101906116b6565b506116dd92915061176f565b5090565b5080546116ed90611ad5565b6000825580601f106116fd575050565b601f0160209004906000526020600020908101906111ed919061176f565b604051806020016040528061149b611784565b6040518060e001604052806000815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016116506115a3565b5b808211156116dd5760008155600101611770565b604080516060810190915280600081526020016117ad6040518060200160405280600081525090565b8152600060209091015290565b6000604082840312156117cc57600080fd5b50919050565b81516001600160a01b03168152602080830151908201526040918201519181019190915260600190565b6001600160a01b03811681146111ed57600080fd5b60006020828403121561182357600080fd5b8135611011816117fc565b634e487b7160e01b600052602160045260246000fd5b600281106111ed57634e487b7160e01b600052602160045260246000fd5b8151606082019061187281611844565b808352506020830151151560208301526040830151604083015292915050565b6000608082840312156117cc57600080fd5b60005b838110156118bf5781810151838201526020016118a7565b83811115610d1c5750506000910152565b82815260406020820152600082518060408401526118f58160608501602087016118a4565b601f01601f1916919091016060019392505050565b60006020828403121561191c57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561195c5761195c611923565b60405290565b6040516020810167ffffffffffffffff8111828210171561195c5761195c611923565b6040516060810167ffffffffffffffff8111828210171561195c5761195c611923565b604051610120810167ffffffffffffffff8111828210171561195c5761195c611923565b80151581146111ed57600080fd5b6000604082840312156119ec57600080fd5b6040516040810181811067ffffffffffffffff82111715611a0f57611a0f611923565b604052823581526020830135611a24816119cc565b60208201529392505050565b60008183036080811215611a4357600080fd5b611a4b611939565b833581526060601f1983011215611a6157600080fd5b611a69611962565b611a71611985565b602086013560028110611a8357600080fd5b81526020603f1985011215611a9757600080fd5b611a9f611962565b60408701358152602082015260608601359350611abb846119cc565b604081019390935291825260208101919091529392505050565b600181811c90821680611ae957607f821691505b602082108114156117cc57634e487b7160e01b600052602260045260246000fd5b8051610df0816117fc565b8051610df0816119cc565b600082601f830112611b3157600080fd5b611b39611962565b80606080850186811115611b4c57600080fd5b855b81811015611b9d57828189031215611b665760008081fd5b611b6e611985565b8151815260208083015181830152604080840151611b8b816119cc565b90830152908652909401938201611b4e565b50919695505050505050565b60006101008284031215611bbc57600080fd5b60405160c0810181811067ffffffffffffffff82111715611bdf57611bdf611923565b6040528251611bed816117fc565b81526020830151611bfd816117fc565b80602083015250604083015160408201526060830151606082015260808301516080820152611c2f8460a08501611b20565b60a08201529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611c7a57611c7a611c51565b500190565b60006101608284031215611c9257600080fd5b611c9a6119a8565b611ca383611b0a565b8152611cb160208401611b0a565b60208201526040830151604082015260608301516060820152611cd660808401611b0a565b6080820152611ce760a08401611b15565b60a082015260c083015160c0820152611d038460e08501611b20565b60e0820152610140929092015161010083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190611d4881611844565b806040850152506020810151516060840152604081015115156080840152509392505050565b600082821015611d8057611d80611c51565b500390565b6000600019821415611d9957611d99611c51565b5060010190565b8060005b6001811015610d1c578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101611da4565b81516001600160a01b03168152602080830151610160830191611e0b908401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151611e3a60808401826001600160a01b03169052565b5060a0830151611e4e60a084018215159052565b5060c083015160c083015260e0830151611e6b60e0840182611da0565b5061010083015161014083015292915050565b60008251611e908184602087016118a4565b9190910192915050565b600060208284031215611eac57600080fd5b8151611011816119cc56fea26469706673582212202121c4727eac1bc5d481203a6937884a3bd411c999672ff84f861e4c88b3135264736f6c634300080c0033`,
  BytecodeLen: 9434,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:119:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:119:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:51:65:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder_makeBid": Bidder_makeBid,
  "Bidder_seeBids": Bidder_seeBids,
  "Creator": Creator,
  "Observer": Observer
  };
export const _APIs = {
  Bidder: {
    makeBid: Bidder_makeBid,
    seeBids: Bidder_seeBids
    }
  };
