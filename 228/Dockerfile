FROM mizzy/centos-4.8-i386

ENV JAVA_HOME=/usr/java/jdk1.6.0_45/
ENV PATH=$JAVA_HOME/bin:$PATH

COPY /server_data/lib/* /usr/lib/
COPY jdk-6u45-linux-i586-rpm.bin /tmp/

RUN chmod +x /tmp/jdk-6u45-linux-i586-rpm.bin
RUN cd /tmp/ && ./jdk-6u45-linux-i586-rpm.bin

CMD ["sleep", "infinity"]
