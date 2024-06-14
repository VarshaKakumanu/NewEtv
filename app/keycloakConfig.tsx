import axios from "axios";

// keycloakConfig.js
export const keycloakConfig = {
  url: "https://13.201.208.89:8443/auth/realms/ETVBharat/protocol/openid-connect/token",
  clientId: "Venkat",
  clientSecret: "Um3SNR9hlSA1O7Ji2qkzfVkvUolEhUQ6", // Only if you're using a confidential client
  realm: "{{realm}}",
  grantType: "password", // Or 'authorization_code' if you're using an authorization code flow
};

export const authenticateUser = async (username: string, password: string) => {
  const data = new URLSearchParams();
  data.append("client_id", keycloakConfig.clientId);
  data.append("username", "varshakakumanu@gmail.com");
  data.append("password", "root123");
  data.append("grant_type", keycloakConfig.grantType);

  if (keycloakConfig.clientSecret) {
    data.append("client_secret", keycloakConfig.clientSecret);
  }

  try {
    const response = await axios.post(keycloakConfig.url, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Authentication failed:", error);
    throw error;
  }
};
