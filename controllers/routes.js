module.exports = function(app){
    app.use("/",(req,res) => {
        res.send("home");
    });

    app.use("/ticket",(req,res) => {
        res.send("ticket page");
    });
}