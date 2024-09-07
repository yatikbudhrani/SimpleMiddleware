export const loggingMiddleware = (req, res, next) => {
  const start = Date.now();
  const ip = req.ip;
  console.log("From Middleware : Request Incoming");
  console.log("Name : Yatik Budhrani");

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[${new Date().toISOString()}] - Request Method : ${
        req.method
      } - Request URL : ${
        req.originalUrl
      } - Request IP: ${ip} - Processing Time : ${duration}ms`
    );
  });

  next();
  console.log("From Middleware : Response Outgoing");
};
