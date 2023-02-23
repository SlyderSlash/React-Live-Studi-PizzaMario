import './pizzascard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ name, price, img }) {
  return (
    <>
      <Card className="card">
        <CardActionArea>
          <CardMedia component="img" height="140" image={img} alt= {"image" + name}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='cardTitle'>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" className='cardPrice'>
              {price} €
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
