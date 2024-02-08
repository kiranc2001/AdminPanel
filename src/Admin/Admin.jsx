import React, { useState } from 'react';
import Dashboard from '../Admin/Components/Dashboard'; // Adjust the path based on the actual location of the Dashboard component

import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CssBaseline, Drawer, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemText from '@mui/material/ListItemText';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Router, Routes, Route } from 'react-router-dom';

import CreateProductForm from './Components/CreateProductForm';
import ProductsTable from './Components/ProductsTable';
import OrdersTable from './Components/OrdersTable';
import CustomerTable from './Components/CustomerTable';
import AdminDashboard from '../Admin/Components/Dashboard';
const menu=[
    { name: "Dashboard",path:"/admin", icon:<DashboardIcon/>},
    { name: "Products",path:"/admin/products", icon:<DashboardIcon/>},
    { name: "Customers",path:"/admin/customers", icon:<DashboardIcon/>},
    { name: "Orders",path:"/admin/orders", icon:<DashboardIcon/>},
    { name: "AddProduct",path:"/admin/product/create", icon:<DashboardIcon/>},
    //{ name: "",path:" "},
]
const Admin = () => {
    const theme=useTheme();
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible]=useState(false);
    const navigate=useNavigate();

    const drawer=(
        <Box
        sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            height:"100%"
        }}
        >
            <>
                {/*isLargeScreen && <Toolbar/>*/}
                <List>
                    {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate
                    (item.path)}>
                        <ListItemButton>
                           <ListItemIcon>
                            {item.icon}
                           </ListItemIcon>
                           <ListItemText>{item.name}</ListItemText>
                        </ListItemButton>

                    </ListItem>)}
                </List>
</>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                           <ListItemIcon>
                           <AccountCircleIcon/>
                           </ListItemIcon>
                           <ListItemText>Account</ListItemText>
                        </ListItemButton>

                    </ListItem>
                </List>
        </Box>
    )

return (
<div>
   <div className='flex h-[100vh]'>
        <CssBaseline/>
        <div className='w-[15%] border border-r-gray-300 h-full'
           
          >
            {drawer}
        </div>
        <div className='w-[85%]'>
            <Routes>
            <Route path='/' element={<AdminDashboard/>}></Route>
            <Route path='/product/create' element={<CreateProductForm/>}></Route>
            <Route path='/products' element={<ProductsTable/>}></Route>
            <Route path='/orders' element={<OrdersTable/>}></Route>
            <Route path='/customers' element={<CustomerTable/>}></Route>
            </Routes>
         </div>

   </div>
</div>
)
}

export default Admin