import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// Button は直接使用しないため削除
import IconButton from '@mui/material/IconButton'; // メニューアイコン用
import MenuIcon from '@mui/icons-material/Menu'; // メニューアイコン自体
import Menu from '@mui/material/Menu'; // メニューコンテナ
import MenuItem from '@mui/material/MenuItem'; // 個々のメニュー項目
import { Link } from 'react-router-dom';
import React, { useState } from 'react'; // useStateフックを使用するため

function Header() {
    // メニューの開閉状態とアンカー要素を管理するstate
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // メニューが開いているかどうかの真偽値
    const open = Boolean(anchorEl);

    // メニューボタンがクリックされたときのハンドラ
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget); // クリックされた要素をアンカーに設定
    };

    // メニューが閉じられたときのハンドラ
    const handleClose = () => {
        setAnchorEl(null); // アンカーをnullにしてメニューを閉じる
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App Title
                </Typography>
                <div> {/* メニューボタンとメニューを囲むコンテナ */}
                    <IconButton
                        size="large"
                        edge="end" // 右端に配置
                        color="inherit"
                        aria-label="menu" // アクセシビリティのためのラベル
                        aria-controls="menu-appbar" // メニューとの関連付け
                        aria-haspopup="true" // ポップアップメニューであることを示す
                        onClick={handleMenu} // クリックでメニューを開く
                    >
                        <MenuIcon /> {/* メニューアイコン */}
                    </IconButton>
                    <Menu
                        id="menu-appbar" // アクセシビリティのためのID
                        anchorEl={anchorEl} // アンカー要素
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted // DOMにマウントされたままにする（SEOやパフォーマンスのため）
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open} // メニューの開閉状態
                        onClose={handleClose} // メニュー外クリックや項目選択で閉じる
                    >
                        <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/settings">Settings</MenuItem>
                        {/* 必要に応じて、ここにさらにメニュー項目を追加できます */}
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;