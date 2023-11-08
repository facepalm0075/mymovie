export const fixPag = (mpage:number[],cpage:number) => {
    const maxpage = mpage.length;
    if (maxpage > 5) {
      let rows: number[] = [];
      if (cpage <= 3) {
        for (let i = 1; i <= 5; i++) {
          rows = [...rows, i];
        }
      } else if (cpage > 3 && cpage <= maxpage - 2) {
        for (let i = cpage - 2; i <= cpage + 2; i++) {
          rows = [...rows, i];
        }
      } else if (cpage > maxpage - 2) {
        for (let i = maxpage - 4; i <= maxpage; i++) {
          rows = [...rows, i];
        }
      }
      return(rows);
    } else {
      return(mpage);
    }
  };