import React, { Component } from 'react';

class ErrorBoundary extends Component {
        constructor(props) {
                super(props);
                this.state = { hasError: false, error: null, errorInfo: null };
        }

        static getDerivedStateFromError(error) {
                console.log('Error caught by ErrorBoundary:', error);
                return { hasError: true, error };
        }

        componentDidCatch(error, errorInfo) {
                console.error('Error caught by ErrorBoundary:', error, errorInfo);
                this.setState({ errorInfo });
        }

        handleResetError = () => {
                this.setState({ hasError: false, error: null, errorInfo: null });
        };

        renderErrorFallback() {
                return (
                        <div className='my-32 px-12'>
                                <h1 className='flex justify-center font-extrabold text-3xl my-2'>Something went wrong......</h1>
                                <p className='text-center font-bold leading-9'>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
                                <div className='flex justify-center my-4'>
                                        <button onClick={this.handleResetError} className='flex justify-center bg-black text-white px-4 py-1 rounded hover:text-black hover:bg-white border-black hover:border-2 font-bold'>Try Again</button>
                                </div>
                        </div>
                );
        }

        render() {
                if (this.state.hasError) {
                        return this.renderErrorFallback();
                }

                return this.props.children;
        }
}

export default ErrorBoundary;