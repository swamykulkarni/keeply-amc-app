import { useState } from 'react'
import './ProductsScreen.css'

function ProductsScreen({ onAddFromDatabase }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const masterDatabase = [
    { id: 1, name: 'Samsung Washing Machine', model: 'WA70H4000SY', brand: 'Samsung', category: 'laundry', icon: '🧺' },
    { id: 2, name: 'LG Refrigerator', model: 'GL-T322RPZU', brand: 'LG', category: 'kitchen', icon: '❄️' },
    { id: 3, name: 'Voltas AC', model: '183V DZA', brand: 'Voltas', category: 'cooling', icon: '❄️' },
    { id: 4, name: 'Bosch Dishwasher', model: 'SMS50D32IN', brand: 'Bosch', category: 'kitchen', icon: '🍽️' },
    { id: 5, name: 'Whirlpool Microwave', model: 'MWP 301 SB', brand: 'Whirlpool', category: 'kitchen', icon: '📱' },
    { id: 6, name: 'Godrej Almirah', model: 'STOR WIZ', brand: 'Godrej', category: 'furniture', icon: '🗄️' },
    { id: 7, name: 'Blue Star Water Purifier', model: 'Aristo', brand: 'Blue Star', category: 'water', icon: '💧' },
    { id: 8, name: 'Crompton Geyser', model: 'ASWH-2015', brand: 'Crompton', category: 'water', icon: '🔥' },
    { id: 9, name: 'Haier Washing Machine', model: 'HWM60-AE', brand: 'Haier', category: 'laundry', icon: '🧺' },
    { id: 10, name: 'Panasonic Microwave', model: 'NN-SM33HM', brand: 'Panasonic', category: 'kitchen', icon: '📱' },
    { id: 11, name: 'Carrier AC', model: '18K 3 Star', brand: 'Carrier', category: 'cooling', icon: '❄️' },
    { id: 12, name: 'Kent Water Purifier', model: 'Grand Plus', brand: 'Kent', category: 'water', icon: '💧' }
  ]

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'laundry', name: 'Laundry' },
    { id: 'cooling', name: 'Cooling' },
    { id: 'water', name: 'Water' },
    { id: 'furniture', name: 'Furniture' }
  ]

  const filteredProducts = masterDatabase.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddProduct = (product) => {
    onAddFromDatabase(product)
    // Show success feedback
    const button = event.target
    const originalText = button.textContent
    button.textContent = '✓ Added!'
    button.style.backgroundColor = '#4CAF50'
    setTimeout(() => {
      button.textContent = originalText
      button.style.backgroundColor = '#1B5E5E'
    }, 2000)
  }

  return (
    <div className="products-screen">
      <header className="app-header">
        <h1>Browse & Add Appliances</h1>
        <div className="header-actions">
          <span className="results-count">{filteredProducts.length} results</span>
        </div>
      </header>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search appliances, models, brands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <span className="product-icon">{product.icon}</span>
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="product-model">{product.model}</p>
              <p className="product-brand">{product.brand}</p>
              <button 
                className="add-btn"
                onClick={() => handleAddProduct(product)}
              >
                Add to My Appliances
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <span className="no-results-icon">🔍</span>
          <h3>No appliances found</h3>
          <p>Try adjusting your search or category filter</p>
        </div>
      )}
    </div>
  )
}

export default ProductsScreen
