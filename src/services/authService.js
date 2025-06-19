import axios from 'axios';

// 🔍 DEBUG: Add console logs to see what's happening
console.log('🔍 Environment Variables Debug:');
console.log('REACT_APP_API_URL:', import.meta.env.VITE_API_URL);

// ✅ Base API URL from environment variable (with fallback for safety)
const BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || 'http://localhost:5191';
const API_URL = `${BASE_URL}/api/`;

// 🔍 DEBUG: Log the final URLs
console.log('🔍 Final URLs:');
console.log('BASE_URL:', BASE_URL);
console.log('API_URL:', API_URL);

export const authService = {
  // 🔐 Register user
  register: async (userRegisterDto) => {
    try {
      console.log('🔍 Making request to:', `${API_URL}auth/register`);
      const response = await axios.post(`${API_URL}auth/register`, userRegisterDto, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 30000
      });

      return response.data;
    } catch (error) {
      return handleApiError(error, 'Registrasi gagal');
    }
  },

  // 👤 Login for kader
  loginKader: async (nik, password) => {
    try {
      console.log('🔍 Making request to:', `${API_URL}auth/login/kader`);
      const response = await axios.post(`${API_URL}auth/login/kader`, { nik, password });

      if (response.data.success && response.data.data) {
        localStorage.setItem('user', JSON.stringify(response.data.data));
      }

      return response.data;
    } catch (error) {
      return handleApiError(error, 'Login kader gagal');
    }
  },

  // 👨‍👩‍👧 Login for orang tua
  loginOrtu: async (nik, password) => {
    try {
      console.log('🔍 Making request to:', `${API_URL}auth/login/ortu`);
      const response = await axios.post(`${API_URL}auth/login/ortu`, { nik, password });

      if (response.data.success && response.data.data) {
        localStorage.setItem('user', JSON.stringify(response.data.data));
      }

      return response.data;
    } catch (error) {
      return handleApiError(error, 'Login orang tua gagal');
    }
  },

  // 🚪 Logout
  logout: () => {
    localStorage.removeItem('user');
  },

  // 🧾 Get current logged in user
  getCurrentUser: () => {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch {
      return null;
    }
  }
};

// 🛡️ Centralized error handling
const handleApiError = (error, defaultMessage = 'Terjadi kesalahan') => {
  console.error('API Error:', error);
  console.error('🔍 Error details:', {
    response: error.response?.data,
    status: error.response?.status,
    request: error.request ? 'Request made but no response' : 'No request made'
  });

  if (error.response) {
    return {
      success: false,
      message: error.response.data?.message || error.response.data?.error || `${defaultMessage} (${error.response.status})`,
      status: error.response.status
    };
  } else if (error.request) {
    return {
      success: false,
      message: 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.'
    };
  } else {
    return {
      success: false,
      message: error.message || defaultMessage
    };
  }
};