ZOHO.CRM.API.coql({
    select_query: "select nousyayoteibi, ServiceStore from Services where nousyayoteibi is not null limit 1"
}).then(function(res){
    console.log("--- 検証結果 ---");
    if(res.data) {
        console.log("✅ 成功！データが取れました:", res.data[0]);
    } else {
        console.error("❌ 失敗：やはりAPI名が違う可能性があります", res);
    }
});
