import './countrie.css'
const Countrie = ({countrie}) => {
    const {name,flags} = countrie;
    return (
        <div className='box'>
            <h3>Name :{name?.common}</h3>
            <img src={flags.png} alt="" />

        </div>
    );
};

export default Countrie;
