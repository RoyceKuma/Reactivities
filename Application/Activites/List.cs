using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activites
{
    public class List
    {
        public class Query : IRequest<List<Activity>>{
            public Query(){}
        }
        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;
            private readonly ILogger<List> _logger;

            public Handler(DataContext context, ILogger<List> logger)
            {
                _context = context;
                _logger = logger;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            { 
                /*CancellationToken Testing*/
               try 
               {
                       cancellationToken.ThrowIfCancellationRequested();
                       await Task.Delay(1000, cancellationToken);
                       _logger.LogInformation($"Task is completed.");
                 
               } 
               catch (Exception ex) when (ex is TaskCanceledException)
               {
                   _logger.LogInformation("Task is cancelled.");
               }
                
                return await _context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}
