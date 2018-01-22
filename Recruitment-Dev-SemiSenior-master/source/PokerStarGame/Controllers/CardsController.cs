using PokerStarGameApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PokerStarGameApp.Controllers
{
    public class CardsController : ApiController
    {

        private static List<Card> pokerCards = new List<Card>()
        {
            //new Card() {Id=1,source="https://lh3.googleusercontent.com/DK6rGopKWXReag31v8BCz9MyzfaxO6l9tKy712UhH6k=w156-h227-p-no", number=1, suit="Clubs" },
            //new Card() { Id=2,source="https://lh3.googleusercontent.com/Ossd-fPNegYULAYEjPHwEHtH0TrUqEBwW90Aq8_i90o=w157-h227-p-no", number=1, suit="Diamonds"},
            //new Card() { Id=3,source="https://lh3.googleusercontent.com/HNrKDIo6yQ2B4otxMXA9By3ZIBwAnsTqyq02erDwxOg=w156-h227-p-no", number=1, suit="Hearts"},
            //new Card() {Id=4,source="https://lh3.googleusercontent.com/xbHgYuXmNIOQlFdVsTZ4qsOaObff_dPqwqCONP_mmvk=w156-h227-p-no", number=1, suit ="Spades" }
        };

        // GET: api/Cards
        public List<Card> Get()

        {
            Random rnd = new Random();
            List<Card> hand = new List<Card>();
            for(var i =1; i<= 5; i++)
            {
                var id = rnd.Next(1, 52);
                Card cardToGive = pokerCards.FirstOrDefault(c => c.Id == id);
                cardToGive.back = "../GameApp/Content/Images/backCard.png";
                hand.Add(cardToGive);
            }
            return hand;
        }

        // GET: api/Cards/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Cards
        public void Post(Card [] cards)
        {
            int index = 0;
            foreach(var c in cards)
            {
                c.Id = index + 1;
                pokerCards.Add(c);
                index++;
            }
        }

        // PUT: api/Cards/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Cards/5
        public void Delete(int id)
        {
        }
    }
}
