//truthiness
function getUsersOnlineMessage(numUsersOnline: number) {
     if (numUsersOnline) {
       return `There are ${numUsersOnline} online now!`;
     }
     return "Nobody's here. :(";
}



function printAll(strs: string | string[] | null) {
     if (strs && typeof strs === "object") {
       for (const s of strs) {
         console.log(s);
       }
     } else if (typeof strs === "string") {
       console.log(strs);
     }
   }


   function multiplyAll(
     values: number[] | undefined,
     factor: number
   ): number[] | undefined {
     if (!values) {
       return values;
     } else {
       return values.map((x) => x * factor);
     }
   }