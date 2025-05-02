import { Stack, IconButton, Select, MenuItem, SelectChangeEvent, ListItemIcon, ListItemText, Box } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from 'react';
import TextIcon from './icons/TextIcon';
import CheckmarkSquare from './icons/CheckmarkSquare';
import HashIcon from './icons/HashIcon';
import LinkIcon from './icons/LinkIcon';
import Checkmark from './icons/Checkmark';
import AtIcon from './icons/AtIcon';

const fields = [
    { label: 'Name', icon: <TextIcon fontSize="small" /> },
    { label: 'Company admin', icon: <CheckmarkSquare fontSize="small" /> },
    { label: 'Last login at', icon: <HashIcon fontSize="small" /> },
    { label: 'Pre-call email enabled', icon: <LinkIcon fontSize="small" /> },
    { label: 'Pre-call slack enabled', icon: <Checkmark fontSize="small" /> },
    { label: 'Autojoin External Meetings', icon: <AtIcon fontSize="small" /> },
    { label: 'Autojoin Internal Meetings', icon: <LinkIcon fontSize="small" /> },
    { label: 'Bot name', icon: <Checkmark fontSize="small" /> },
];

const operators = ['Equals', 'Contains', 'Is empty', 'Is not empty'];
const values = ['External', 'Internal', 'Other'];

export default function FilterCondition() {
    const [field, setField] = useState(fields[0]); // Default to the first field
    const [operator, setOperator] = useState(operators[0]); // Default to the first operator
    const [value, setValue] = useState(values[0]); // Default to the first value

    return (
        <Stack direction="row" spacing={0} alignItems="center">
            <Select
                size="small"
                value={field?.label || fields[0].label} // Fallback to the first field
                onChange={(e: SelectChangeEvent) => {
                    const selectedField = fields.find((f) => f.label === e.target.value);
                    if (selectedField) setField(selectedField);
                }}
                sx={{ width: 220 }}
            >
                {fields.map((f) => (
                    <MenuItem key={f.label} value={f.label}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"start", gap: 1, overflow: 'hidden' }}>
                            {f.icon}
                            {f.label}
                        </Box>
                    </MenuItem>
                ))}
            </Select>

            <Select
                size="small"
                value={operator || operators[0]} // Fallback to the first operator
                onChange={(e: SelectChangeEvent) => setOperator(e.target.value)}
                sx={{ minWidth: 140 }}
            >
                {operators.map((op) => (
                    <MenuItem key={op} value={op}>
                        {op}
                    </MenuItem>
                ))}
            </Select>

            <Select
                size="small"
                value={value || values[0]} // Fallback to the first value
                onChange={(e: SelectChangeEvent) => setValue(e.target.value)}
                sx={{ minWidth: 140 }}
            >
                {values.map((val) => (
                    <MenuItem key={val} value={val}>
                        {val}
                    </MenuItem>
                ))}
            </Select>

            <IconButton color="error">
                <RemoveCircleOutlineIcon />
            </IconButton>
        </Stack>
    );
}