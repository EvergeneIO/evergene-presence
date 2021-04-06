const presence = new Presence({
  clientId: "828621398888677376"
}),
browsingStamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", () => {
const presenceData = {
  largeImageKey: "evergene-logo",
  startTimestamp: browsingStamp,
  details: "On the homepage of Evergene"
};

if (document.location.pathname.includes("/api"))
  presenceData.details = "Browsing APIs";
else if (document.location.pathname.includes("/about"))
  presenceData.details = "Reading about Evergene";
else if (document.location.pathname.includes("/contact"))
  presenceData.details = "Contacting Evergene";
else if (document.location.pathname.includes("/team"))
  presenceData.details = "Reading about the team of Evergene";
else if (document.location.pathname.includes("/bugs"))
  presenceData.details = "Reading bugs";
else if (document.location.pathname.includes("/changelog"))
  presenceData.details = "Reading the changelog";
else if (document.location.pathname.includes("/partner"))
  presenceData.details = "Reading about the partners of Evergene";

if (!presenceData.details) presence.setTrayTitle();
else presence.setActivity(presenceData);
});