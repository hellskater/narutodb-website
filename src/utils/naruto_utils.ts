import get from 'lodash/get'
import sampleSize from 'lodash/sampleSize'
export const generateRandomCharacters = (
    params :{ setRandomCharacters: (arr:any)=>void, characters:any[], limit:number}) => {
    const {
        setRandomCharacters, characters, limit
    } = params;
    console.log(params);
    try{
        var newCharacterArray = characters.filter((character) => {
            return get(character,['images','length'],0) > 0 &&
                   get(character,['personal','clan'],null) &&
                   get(character,['personal','status'],null)
          }); 

          const randomSixCharacter = sampleSize(newCharacterArray, limit)
          setRandomCharacters(randomSixCharacter);

    }
    catch{
        console.log('Could not find characters')
    }
}