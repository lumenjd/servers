#!/usr/bin/perl -w
use warnings;

die "Usage:clean_err.pl dir backupdir" if (@ARGV < 2); #/home/zhangyu/game/config /home/zhangyu/backup
#1.mkdir /home/zhangyu/backup
#2.crontab -e. 30 12 * * * /home/zhangyu/clean_err.pl /home/zhangyu/game/config /home/zhangyu/backup >>/home/zhangyu/backup/clean_err.log 2>&1

my $root = $ARGV[0];
my $backup=$ARGV[1];
chdir $root;
my $date = getdatetime();

sub getdatetime
{
        my ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime(time);
        $year += 1900; $mon += 1; $mday -=1;
        my $date = sprintf("%04d%02d%02d%02d%02d%02d", $year , $mon , $mday, $hour, $min, $sec);
        return $date;
}

my @each=<*>;

foreach(@each)
{
        finddir($root,$_);
}

sub finddir
{
        my ($root, $sub) = @_;
        if(-d $sub)
        {
                $root = $root . "/" . $sub;
                #print $root . "\n";
                chdir $sub;
                my @each=<*>;
                foreach(@each)
                {
                        finddir($root, $_);
                }
                chdir "..";
                my $mode = (stat($root))[2];
                if ($mode && ($mode eq 16385)) # || $mode eq 32769))
                {
                        my $pwd = `pwd`;
                        chomp($pwd);
                        my $cmd="mv -f $root $backup/$_\.$date";
                        system($cmd);
                        print("$cmd\n");
                }
        }
}
