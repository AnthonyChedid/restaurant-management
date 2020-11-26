import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Error=(error)=>{
    if(error.error!==null){
    return(
        <div>
            <Snackbar open={true} autoHideDuration={6000} >
                <Alert severity="error">
                    An error happened while fetching
                </Alert>
            </Snackbar>
        </div>
    )
    }
    else{
        return(
            <div>

            </div>
        )
    }
}

export default Error