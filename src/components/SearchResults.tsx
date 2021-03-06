import { List, ListRowRenderer } from "react-virtualized";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number
  results: Array<{
    id: number
    title: string
    price: number
    priceFormatted: string
  }>
  onAddToWishlist: (id: number) => void
}

export function SearchResults({ totalPrice, results, onAddToWishlist }: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    )
  }
  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        width={900}
        height={300}
        rowHeight={30}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  )
}