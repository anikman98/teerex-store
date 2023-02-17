import '../../css/Cart.css'

const EmptyCart = () => {
  return (
    <div className='cart-card'>
      <div className="empty-card">
        <h3>Cart is empty!</h3>
        <small>Please add something...</small>
      </div>
    </div>
  )
}

export default EmptyCart