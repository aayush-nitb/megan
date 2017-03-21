"use strict";
var mongoose = require('mongoose');
module.exports = mongoose.model('courses', new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    start: { type: String, required: true }
}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS92MS9tb2RlbHMvTW9kZWxfQ291cnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLFFBQVEsV0FBTSxVQUUxQixDQUFDLENBRm1DO0FBRXBDLGlCQUFTLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyRCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtJQUNwRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDeEMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBpL3YxL21vZGVscy9Nb2RlbF9Db3Vyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmV4cG9ydCA9IG1vbmdvb3NlLm1vZGVsKCdjb3Vyc2VzJywgbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICBzdGFydDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH1cclxufSkpOyJdfQ==