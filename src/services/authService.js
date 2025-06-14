import axios from 'axios';

const API_URL = 'http://localhost:5191/api/'; 

export const authService = {
  register: async (userRegisterDto) => {
    try {
      console.log('Sending registration request to:', API_URL + 'auth/register');
      console.log('Registration data:', userRegisterDto);
      
      const response = await axios.post(API_URL + 'auth/register', userRegisterDto, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 30000, // 30 second timeout
      });
      
      console.log('Registration response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Registration API Error:', error);
      
      // Handle different types of errors
      if (error.response) {
        // Server responded with error status
        console.error('Error Response:', error.response.data);
        console.error('Error Status:', error.response.status);
        
        // Return error data instead of throwing
        return {
          success: false,
          message: error.response.data?.message || error.response.data?.error || `Server error: ${error.response.status}`,
          status: error.response.status
        };
      } else if (error.request) {
        // Network error - no response received
        console.error('Network Error:', error.request);
        return {
          success: false,
          message: 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.'
        };
      } else {
        // Other error
        console.error('Error:', error.message);
        return {
          success: false,
          message: error.message || 'Terjadi kesalahan yang tidak diketahui'
        };
      }
    }
  },
  
  loginKader: async (nik, password) => {
    try {
      const response = await axios.post(API_URL + 'auth/login/kader', {
        nik,
        password
      });
      
      if (response.data.success && response.data.data) {
        localStorage.setItem('user', JSON.stringify(response.data.data));
      }
      
      return response.data;
    } catch (error) {
      if (error.response) {
        return {
          success: false,
          message: error.response.data?.message || error.response.data?.error || 'Login gagal'
        };
      }
      return {
        success: false,
        message: 'Tidak dapat terhubung ke server'
      };
    }
  },
  
  loginOrtu: async (nik, password) => {
    try {
      const response = await axios.post(API_URL + 'auth/login/ortu', {
        nik,
        password
      });
      
      if (response.data.success && response.data.data) {
        localStorage.setItem('user', JSON.stringify(response.data.data));
      }
      
      return response.data;
    } catch (error) {
      if (error.response) {
        return {
          success: false,
          message: error.response.data?.message || error.response.data?.error || 'Login gagal'
        };
      }
      return {
        success: false,
        message: 'Tidak dapat terhubung ke server'
      };
    }
  },
  
  logout: () => {
    localStorage.removeItem('user');
  },
  
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  }
};