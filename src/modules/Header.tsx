import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static"> {/* ヘッダーバーのコンポーネント */}
            <Toolbar> {/* ヘッダーバー内のコンテンツを配置するコンテナ */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App Title 
                </Typography>
                <Button color="inherit" component={Link} to="/"> 
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/settings"> {/* 設定へのリンクボタン */}
                    Settings
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;