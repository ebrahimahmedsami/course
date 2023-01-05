<?php

namespace App\Console\Commands;

use App\Jobs\SendMailToExpiredCustomers;
use App\Models\Customer;
use Carbon\Carbon;
use Illuminate\Console\Command;

class CheckSubscriptions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:sub';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check Subscriptions Expiration Date';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $today = Carbon::today()->toDateString();
        $expired_customers = Customer::where('subscription_end_date','<',$today)->get();
        foreach ($expired_customers as $c){
            dispatch(new SendMailToExpiredCustomers());
        }

    }
}
