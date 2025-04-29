export const handleError = (error, res) => {
    if (error.name === 'ValidationError') {

      return res.status(400).json({
        status: 'error',
        message: 'Validation Error',
        error: error.message,
      });
    }
  
    return res.status(500).json({
      status: 'error',
      message: 'Server Error',
      error: error.message,
    });
  };
  