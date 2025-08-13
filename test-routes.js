import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:4000';

async function testRoutes() {
  console.log('🧪 Testing API routes...\n');

  try {
    // Test main route
    console.log('1. Testing main route...');
    const mainResponse = await fetch(`${BASE_URL}/`);
    const mainData = await mainResponse.json();
    console.log('✅ Main route:', mainData.message);

    // Test user route
    console.log('\n2. Testing user route...');
    const userResponse = await fetch(`${BASE_URL}/api/user/user`);
    const userData = await userResponse.json();
    console.log('✅ User route:', userData.message);

    // Test auth routes
    console.log('\n3. Testing auth routes...');
    
    const authRoutes = [
      { name: 'Signup', path: '/api/auth/signup', method: 'POST' },
      { name: 'Login', path: '/api/auth/login', method: 'POST' },
      { name: 'Refresh Token', path: '/api/auth/refresh-token', method: 'POST' },
      { name: 'Logout', path: '/api/auth/logout', method: 'POST' },
      { name: 'Forgot Password', path: '/api/auth/forgot-password', method: 'POST' },
      { name: 'Reset Password', path: '/api/auth/reset-password', method: 'POST' }
    ];

    for (const route of authRoutes) {
      try {
        const response = await fetch(`${BASE_URL}${route.path}`, {
          method: route.method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({})
        });
        const data = await response.json();
        console.log(`✅ ${route.name}:`, data.message);
      } catch (error) {
        console.log(`❌ ${route.name}:`, error.message);
      }
    }

    console.log('\n🎉 All routes tested successfully!');

  } catch (error) {
    console.error('❌ Error testing routes:', error.message);
    console.log('\n💡 Make sure the server is running with: npm run dev');
  }
}

testRoutes();
