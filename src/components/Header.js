import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, toggleButton }) => {
    
    return (
        <div>
            <header className="header">
                <h1>{title}</h1>
                <Button text={toggleButton ? 'Close' : 'Add' } color={toggleButton ? 'red' : 'green'} onClick={onAdd} />
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Default title'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
