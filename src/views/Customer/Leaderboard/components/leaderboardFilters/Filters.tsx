import { MenuItem, Select } from '@mui/material';

const filters = [
  {
    name: 'British GP',
    value: 'track1',
  },
  {
    name: 'Hungarian GP',
    value: 'track2',
  },
  {
    name: 'Belgium GP',
    value: 'track3',
  },
  {
    name: 'SilverStone',
    value: 'British',
  },
  {
    name: 'Austrian',
    value: 'Austrian',
  },
  {
    name: 'Canada',
    value: 'Canada',
  },
  {
    name: 'Monaco',
    value: 'Monaco',
  },
  {
    name: 'Imola',
    value: 'Imola',
  },
  {
    name: 'All',
    value: 'All',
  },
];
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
        <MenuItem key={name.value} value={name.value}>
          {name.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default LeaderboardFilters;
