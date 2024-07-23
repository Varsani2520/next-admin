'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import CustomTable from '../common/CustomTable';
import CustomButton from '../common/CustomButton';
import Heading from '../common/Heading';
import FilterListIcon from '@mui/icons-material/FilterList';
import DownloadIcon from '@mui/icons-material/Download';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CustomMenu from '../common/CustomMenu';
import { GetHomeScreen } from '../services/GetHomeScreen';
import Filter from '../components/Drawer/Filter'
const Page = () => {
  const [sliderInfo, setSliderInfo] = React.useState([]);
  const [filterSlider, setFilterSlider] = React.useState(false);

  async function GetSlider() {
    const response = await GetHomeScreen();
    console.log('provider', response.swiper);
    const sliders = response.swiper.map((category) => ({
      id: category.id || '',
      profile: {
        imageUrl: category.img || ''
      },
      Type: category.type || '',
      Status: category.type || 'Individual',
      Created_At: category.createdAt || '',
      operation: 'Edit'
    }));

    setSliderInfo(sliders);
  }

  React.useEffect(() => {
    GetSlider();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'Image', headerName: 'Image' },
    { field: 'Type', headerName: 'Type' },
    { field: 'Status', headerName: 'Status' },
    { field: 'Created_At', headerName: 'Created At' },
    { field: 'operation', headerName: 'Operation' }
  ];

  return (
    <div>
      <Box p={2} className="bg-white my-4 rounded-md">
<h3 className="py-5">All Sliders </h3>    <hr/>    <Box my={2} display="flex" alignItems="center" gap={1} flexWrap="wrap">
          <CustomButton title="ALL" color="info" variant="outlined" />
          <CustomButton title="Approved" color="success" variant="outlined" />
          <CustomButton title="Disapproved" color="error" variant="outlined" />
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            className="h-[40px]"
          />
          <CustomButton
            startIcon={<FilterListIcon />}
            variant="outlined"
            className="h-[40px]"
            onClick={() => setFilterSlider(true)} // Toggle Drawer visibility
          >
            Filter
          </CustomButton>
          <Drawer
            open={filterSlider}
            anchor="right"
            onClose={() => setFilterSlider(false)}
          >
            
           <Filter onClose={()=>setFilterSlider(false)}/>
          </Drawer>
          <CustomMenu
            title={"Download"}
            firstItem={"PDF"}
            secondItem={"Excel"}
            thirdItem={"CSV"}
          >
            <CustomButton
              startIcon={<DownloadIcon />}
              title="Download"
              variant="outlined"
              className="h-[40px]"
            />
          </CustomMenu>
          <Box flexGrow={1} />
          <CustomButton
            startIcon={<AddCircleOutlineRoundedIcon />}
            title="Add Provider"
            variant="contained"
            href="/provider/add_provider"
            className="h-[40px] bg-green-500 hover:bg-green-600"
          />
        </Box>
        <CustomTable columns={columns} rows={sliderInfo} />
      </Box>
    </div>
  );
};

export default Page;
