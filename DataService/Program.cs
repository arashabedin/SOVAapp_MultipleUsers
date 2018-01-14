using System;
using DataService.DataAccessLayer;
using System.Net.Http;
using System.Linq;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Diagnostics;
namespace DataService
{
    public class Program 
    {
        private const string QuestionsApi = "http://localhost:5001/api/question";
        private const string UserApi = "http://localhost:5001/api/user";
        static void Main(string[] args)
        {
            using (var db = new SovaContext())
              {
                


            }



            var rep = new RepositoryBody();

            var q = rep.ShowCustomePosts(26);

            Console.WriteLine(q.Count);
            Console.WriteLine(q.First().Title);
            Console.ReadLine();

            Console.WriteLine();
            Console.ReadLine();
        }
    }
}


     