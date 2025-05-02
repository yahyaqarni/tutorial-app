import { Stack, Typography, Button, Box } from '@mui/material';
import FilterCondition from './FilterCondition';

export default function FilterGroup() {
    return (
        <Box className='flex gap-8 justify-between items-center' p={2} border={1} borderRadius={2} sx={{ borderColor: '#EBEBEB', boxShadow: 0.5 }}>
            <Stack spacing={4} justifyItems="center"width="100%" height="100%">
                <Typography variant="subtitle2" fontSize={16}>Where</Typography>
                <Typography variant="subtitle2" color='primary' fontSize={16}>And </Typography>
            </Stack>
            <Stack spacing={2} justifyItems="center" alignItems="center" width="100%">

                <FilterCondition />
                <FilterCondition />
                <Button variant="outlined" fullWidth sx={{backgroundColor:"#EBF2FB", border:'none', color:"#004EA9"}} >
                    Add Condition +
                </Button>
            </Stack>
        </Box>
    );
}