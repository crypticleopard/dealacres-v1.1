const extractTokenFromCookie = (cookieString) => {
    if (!cookieString) return null;
    const match = cookieString.match(/token=(.*?)(?:;|$)/);
    return match ? match[1] : null;
};

export const login = async (username, password) => {
    try {
      const response = await fetch('https://dealacresbackend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        let token;
  
       
        const authorizationHeader = response.headers.get('Authorization');
        if (authorizationHeader) {
          token = authorizationHeader.split(' ')[1]; 
        }
  
        
        if (!token) {
          const cookieToken = extractTokenFromCookie(response.headers.get('Set-Cookie'));
          if (!cookieToken) {
            throw new Error('Token not found in response');
          }
          token = cookieToken;
        }
  
     return {token};
   
       
      } else {
       
        const errorMessage = await response.text();
        throw new Error(`Login failed: ${errorMessage}`);
      }
    } catch (error) {
     
      console.error('Error:', error);
      throw error;
    }
};

export const logout = async (token) => {
    try {
        const response = await fetch('https://dealacresbackend.onrender.com/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });

        if (response.ok) {
            return { success: true }; 
        } else {
            const errorMessage = await response.text();
            throw new Error(`Logout failed: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await fetch('https://dealacresbackend.onrender.com/api/User', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            const responseData = await response.json();
            return responseData; 
        } else {
            const errorMessage = await response.text();
            throw new Error(`User registration failed: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const locality 


  


  
 

  

  