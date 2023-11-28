import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Benefits() {
  return (
    <div>
       
          <div id='card-container' className='flex '>
              <Card className='' sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://img.freepik.com/free-vector/account-concept-illustration_114360-279.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Transparent Transaction Fees
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  At JandPay, we believe in transparency and fairness. Enjoy the peace of mind 
                  that comes with transparent transaction fees. We pride ourselves on providing a clear 
                  breakdown of fees associated with your financial transactions. No hidden charges or surprises 
                  – just straightforward, honest pricing. With JandPay, you can confidently send and receive money 
                  across borders, knowing exactly what you'll be charged for the convenience of our services.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card className='' sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://img.freepik.com/premium-vector/online-transfer-money-by-using-smartphone-concept-cashless-payment-hands-hold-phone-transactions-vector-illustration_185038-582.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Instant Cross-Border Transfers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Experience the speed of instant cross-border transfers with JandPay. Say goodbye 
                  to the days of waiting for your funds to reach their destination. Our advanced technology 
                  ensures that your transactions are processed swiftly and efficiently, allowing you to send and
                   receive money in real-time. Whether it's for business or personal use, JandPay empowers you with
                    the ability to move your money across borders instantly, providing a level of convenience that fits your fast-paced lifestyle.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card className='' sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://img.freepik.com/free-vector/flat-people-holding-euro-dollar-coins-currency-exchange_88138-568.jpg?size=626&ext=jpg&ga=GA1.1.1917407316.1652918962&semt=ais"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Multi-Currency Support for Global Convenience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                JandPay goes beyond borders by offering multi-currency support for unparalleled 
                global convenience. Seamlessly manage and transact in multiple currencies within a single app. 
                No need to juggle between different platforms or worry about currency conversions – JandPay
                 simplifies your financial world. Our user-friendly interface allows you to effortlessly navigate through diverse financial 
                landscapes, making international transactions as easy as local ones. Embrace the freedom to transact globally with JandPay.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
        </div>
    </div>
  );
}

export default Benefits;