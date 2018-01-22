using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PokerStarGameApp.Models
{
    public class Card
    {
        public int Id { get; set; }
        public string front { get; set; }
        public string back { get; set; }
        public int number { get; set; }
        public string suit { get; set; }
    }
}