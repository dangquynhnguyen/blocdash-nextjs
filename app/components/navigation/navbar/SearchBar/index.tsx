import SearchIcon from '@mui/icons-material/Search'
import { Box, IconButton, InputBase } from '@mui/material'
import { styles } from '../styles'

export const SearchBar = () => (
	<Box style={styles.searchBar}>
		<InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
		<IconButton type="button" sx={{ p: 1 }}>
			<SearchIcon />
		</IconButton>
	</Box>
)
