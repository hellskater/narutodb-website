import CharacterBox from './CharacterBox';
import Box from '@mui/material/Box'
export default function MultiActionAreaCard(props) {
  const { data } = props;
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            overflow: 'hidden',
            justifyContent: 'center',
            backgroundColor:'rgb(249 145 1)',
            padding: '3rem'
        }}>
          {(data || []).slice(0,5).map((characterData, index) =>
          (            
          <CharacterBox 
          key={characterData?.id || index} 
          characterData={characterData}/>
          ))}
        </Box>

    );
  }