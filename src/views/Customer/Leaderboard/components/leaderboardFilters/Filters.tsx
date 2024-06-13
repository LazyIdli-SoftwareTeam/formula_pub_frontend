import { MenuItem, Select } from '@mui/material';

const filters = ['monaco', 'imola', 'canada', 'all'];
const LeaderboardFilters: React.FC<{
  changeHandler: (value: string) => void;
  value: string;
}> = ({ changeHandler, value }) => {
  return (
    <Select
      labelId="demo-multiple-chip-label"
      id="demo-multiple-chip"
      style={{ width: '100%' }}
      value={value}
      onChange={(e) => {
        changeHandler(e.target.value);
      }}
      size="small"
    >
      {filters.map((name) => (
        <MenuItem key={name} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default LeaderboardFilters;
