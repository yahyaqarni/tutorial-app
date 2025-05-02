'use client';
import { Stack, Button, Typography } from '@mui/material';
import FilterGroup from './FilterGroup';

export default function FilterBuilder() {
  return (
    <Stack spacing={1} padding={1.5} border={1} borderRadius={2} sx={{ borderColor: '#EBEBEB', boxShadow: 1 }}>
        <div className='flex w-full justify-between p-0'>
        <Typography variant="subtitle1">Applied Filters <span className='text-blue-600'> (2) </span></Typography>
        <Typography className='hover:text-blue-950' variant="subtitle1" color='primary' component="button" sx={{cursor:"pointer"}}>Clear All</Typography>
        </div>
      <FilterGroup />
      <div className='flex justify-end p-0'>
      <Button variant="contained" color='secondary' sx={{maxWidth:200, borderRadius:2}}>Add Condition Group +</Button>
      </div>
    </Stack>
  );
}