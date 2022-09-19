import Header from '~/component/Layout/component/Header';
function Defaultlayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className='content'>
            {children}
        </div>
      </div>
    </div>
  );
}

export default Defaultlayout;
