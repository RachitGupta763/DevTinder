

userAuthRouter
-> POST/signup
-> POST/login
-> POST/logout

profileRouter
-> GET/profile/view
-> PATCH/profile/edit
-> PATCH/profile/password

connectionRequestRouter
-> POST/request/send/interested/:userId
-> POST/request/send/ignored/:userId
-> POST/request/received/accept/:userId
-> POST/request/received/reject/:userId


userRouter
-> GET/users/connection
-> GET/users/request
-> GET/feed
