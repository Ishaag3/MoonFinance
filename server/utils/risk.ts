interface UserResponse {
    [key: string]: number;
  }
  
  export const calcRisk = (userResponse: UserResponse): number => {
    const riskScore =
      userResponse["1"] * 0.15 +
      userResponse["2"] * 0.1 +
      userResponse["3"] * 0.3 +
      userResponse["5"] * 0.15 +
      userResponse["6"] * 0.12 +
      userResponse["7"] * 0.05 +
      userResponse["8"] * 0.08;
  
    return parseFloat(riskScore.toFixed(4));
  };
  