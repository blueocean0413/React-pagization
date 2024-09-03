import axios from "axios";

export function getWallet(username) {
  return async () => {
    try {
      const response = await axios.post(`/wallet/${username}`);
      if (response.status === 200) {
        dispatch(wallet.actions.getWalletSuccess(response.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(wallet.actions.hasError(error));
    }
  };
}

export function insertWallet(username) {
  // console.log("insertWallet function =>", username);
  return async () => {
    try {
      const response = await axios.post("/wallet/add", {
        username: username,
      });
      if (response.status === 200)
        dispatch(wallet.actions.addWalletSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
export function updateWallet(username, totalPoint, balance, energy) {
  return async () => {
    try {
      const response = await axios.post(`/wallet/update/${username}`, {
        totalPoint: totalPoint,
        balance: balance,
        energy: energy,
      });
      // console.log(response);
      dispatch(wallet.actions.updateWalletSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(wallet.actions.hasError(error));
    }
  };
}
export function updateEnergy(username, energy) {
  // console.log("updateEnergy function", energy);
  return async () => {
    try {
      const response = await axios.post(`/wallet/updateEnergy/${username}`, {
        energy: energy,
      });
      dispatch(wallet.actions.updateWalletSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(wallet.actions.hasError(error));
    }
  };
}
export function updateTap(username, tap) {
  // console.log("------>", tap);
  return async () => {
    try {
      const response = await axios.post(`/wallet/updateTap/${username}`, {
        tap: tap,
      });
      dispatch(wallet.actions.updateWalletSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(wallet.actions.hasError(error));
    }
  };
}

// export function buyBonusCard(username: string, token: number) {
//   // console.log("buyBonusCard =>");
//   return async () => {
//     try {
//       const response = await axios.post(`/wallet/buyBonusCard/${username}`, {
//         passItemLevel: 1, // tap: tap,
//         token: token,
//       });
//       dispatch(wallet?.actions?.updateWalletSuccess(response?.data));
//     } catch (error) {
//       console.log(error);
//       dispatch(wallet?.actions?.hasError(error));
//     }
//   };
// }

// export function removeBonusCard(
//   username: string,
//   total: number,
//   token: number
// ) {
//   // console.log("removeBonusCard =>");
//   return async () => {
//     try {
//       const response = await axios.post(`/wallet/removeBonusCard/${username}`, {
//         total: total,
//         token: token,
//       });
//       dispatch(wallet?.actions?.updateWalletSuccess(response?.data));
//     } catch (error) {
//       console.log(error);
//       dispatch(wallet?.actions?.hasError(error));
//     }
//   };
// }

// export function updateLimit(username: string, limit: number) {
//   // console.log("------>", limit);
//   return async () => {
//     try {
//       const response = await axios.post(`/wallet/updateLimit/${username}`, {
//         limit: limit,
//       });
//       dispatch(wallet?.actions?.updateWalletSuccess(response.data));
//     } catch (error) {
//       console.log(error);
//       dispatch(wallet?.actions?.hasError(error));
//     }
//   };
// }
// export function updateBalance(username: string, balance: number) {
//   return async () => {
//     try {
//       const response = await axios.post(`/wallet/updateBalance/${username}`, {
//         balance: balance,
//       });
//       dispatch(wallet?.actions?.updateWalletSuccess(response.data));
//     } catch (error) {
//       console.log(error);
//       dispatch(wallet?.actions?.hasError(error));
//     }
//   };
// }
// export function addFriend(username: string) {
//   return async () => {
//     try {
//       await axios.post(`/wallet/${username}`);
//       dispatch(wallet?.actions?.addFriendSuccess(true));
//     } catch (error) {
//       console.log(error);
//       dispatch(wallet?.actions?.addFriendSuccess(false));
//     }
//   };
// }
// export function getAllUsers() {
//   // console.log("getAllUsers function => called");
//   return async () => {
//     try {
//       const response = await axios.get("/wallet/all");
//       dispatch(wallet?.actions?.getUsersSuccess(response?.data));
//     } catch (error) {
//       console.log(error);
//       dispatch(wallet?.actions?.hasError(error));
//     }
//   };
// }
