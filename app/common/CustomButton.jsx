import React from 'react'
import Button from '@mui/material/Button'

const CustomButton = ({
    onClick,
    variant,
    color,
    size,
    startIcon,
    endIcon,
    style,
    className,
    title }) => {
    // Define valid color options
    const validColors = ['default', 'inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']

    return (
        <Button className="mr-2"
            onClick={onClick}
            variant={variant}
            color={validColors.includes(color) ? color : 'primary'} // Ensure color is valid
            size={size}
            startIcon={startIcon}
            endIcon={endIcon}
            style={style}
        >{title}
        </Button>
    )
}

export default CustomButton
