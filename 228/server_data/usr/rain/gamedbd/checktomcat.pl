#!/usr/bin/perl

use IO::Socket;

use strict;

# for manager
my $cmd = "/bin/ps -aux | /bin/grep java";
my $result = qx/$cmd/;
my @lines = split( /\n/, $result );
my $has_tomcat = undef;
foreach( @lines )
{
	$has_tomcat = 1 if( $_ =~ m/tomcat/ );
}
if( $has_tomcat )
{
	my $retval = -1;
	eval
	{
		local $SIG{ALRM} = sub { $retval = 255; die; };
		alarm(10);
		my $sock = IO::Socket::INET->new(PeerAddr => '127.0.0.1', PeerPort => '443', Proto => 'tcp');
		$sock->send( "HEAD / HTTP/1.0\r\n\r\n" );
		while (<$sock>)
		{
			$retval = 0;
		}
	};
	$has_tomcat = undef	if( 0 != $retval );
}
if( not $has_tomcat )
{
	system( "/root/bin/restarttomcat.sh" );
}

