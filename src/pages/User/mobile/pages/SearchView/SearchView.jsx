import {CssBaseline, ThemeProvider} from '@mui/material';
import {
  CrossIconBtn,
  FilterButton,
  FilterButtonContainer,
  NewButton,
  SearchProductContainer,
  SearchResultContainer,
  SearchResultHeading,
  SearchViewBar,
  SearchViewContainer,
  StyledPagination,
  StyledPaginationItem,
  theme,
} from '../../theme/themes';
import '@fontsource/abhaya-libre';
import Navbar from '../../components/Navbar/Navbar';
import SearchIcon from '../../assets/SearchBlack.svg';
import CrossIcon from '../../assets/Cross.svg';
import DownIcon from '../../assets/Down.svg';
import ListView from '../../assets/ListView.svg';
import FilterIcon from '../../assets/Filter.svg';
import ProductCard from '../../components/ProductCard';

const data = [
  {name: 'Biker Collection', desc: 'Lorem ipsum', price: '120', rating: 3},
  {name: 'Biker Collection', desc: 'Lorem ipsum', price: '120', rating: 3},
  {name: 'Biker Collection', desc: 'Lorem ipsum', price: '120', rating: 3},
  {name: 'Biker Collection', desc: 'Lorem ipsum', price: '120', rating: 3},
  {name: 'Biker Collection', desc: 'Lorem ipsum', price: '120', rating: 3},
  {name: 'Biker Collection', desc: 'Lorem ipsum', price: '120', rating: 3},
  {name: 'Biker Collection', desc: 'Lorem ipsum', price: '120', rating: 3},
  {name: 'Biker Collection', desc: 'Lorem ipsum', price: '120', rating: 3},
  {name: 'Biker Collection', desc: 'Lorem ipsum', price: '120', rating: 3},
  {name: 'Biker Collection', desc: 'Lorem ipsum', price: '120', rating: 3},
];

const SearchView = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <SearchViewContainer>
        <SearchViewBar
          placeholder='Search'
          disableUnderline
          endAdornment={
            <>
              <CrossIconBtn sx={{bgColor: 'text.secondary'}}>
                <img src={CrossIcon} alt='CrossIcon' />
              </CrossIconBtn>
              <img src={SearchIcon} alt='SearchIcon' />
            </>
          }
        />
        <SearchResultContainer>
          <SearchResultHeading variant='body2'>8 result of dress</SearchResultHeading>
          <FilterButtonContainer>
            <NewButton variant='contained' disableElevation>
              New
              <img src={DownIcon} alt='DownIcon' />
            </NewButton>
            <FilterButton>
              <img src={ListView} alt='ListView' />
            </FilterButton>
            <FilterButton>
              <img src={FilterIcon} alt='FilterIcon' />
            </FilterButton>
          </FilterButtonContainer>
        </SearchResultContainer>

        <SearchProductContainer container spacing={2}>
          {data.map((item, index) => {
            return <ProductCard key={index} item={item} bgWhite />;
          })}
        </SearchProductContainer>

        <StyledPagination count={5} renderItem={item => <StyledPaginationItem {...item} />} />
      </SearchViewContainer>
    </ThemeProvider>
  );
};

export default SearchView;
