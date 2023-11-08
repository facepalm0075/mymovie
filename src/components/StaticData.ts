import data from "../data.json"
export const getStaticData = (id:string | undefined)=>{
    let result:any[]=[{}];
    switch(id) {
        case "Popular":
          result=data.popular;
          break;
        case "Top-Rated":
            result=data.topRated;
          break;
        case "Upcoming":
            result=data.upcoming;
          break; 
          case "Action":
            result=data.action;
          break;
          case "Comedy":
            result=data.comedy;
          break;
          case "Crime":
            result=data.crime;
          break;
          case "Drama":
            result=data.drama;
          break;
          case "Fantasy":
            result=data.fantasy;
          break;
          case "Historical":
            result=data.historical;
          break;
          case "Horror":
            result=data.horror;
          break;
          case "Science-fiction":
            result=data.scienceFiction;
          break;
          case "Western":
            result=data.western;
          break;   
          default:
            result=data.popular;        
      }
      return result
}