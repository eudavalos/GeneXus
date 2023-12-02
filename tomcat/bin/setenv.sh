echo "GeneXus - Setting custom environment variables for Tomcat"

#export CATALINA_OPTS="$CATALINA_OPTS -XX:HeapDumpPath=/logs/tomcat/java_heapdump_pid_%p.log"
#export CATALINA_OPTS="$CATALINA_OPTS -XX:+HeapDumpOnOutOfMemoryError"
#export CATALINA_OPTS="$CATALINA_OPTS -Djava.awt.headless=true"
export CATALINA_OPTS="-Xms256m -Xmx312m"
# Configuración del recolector de basura (G1GC)
#export CATALINA_OPTS="$CATALINA_OPTS -XX:+UseG1GC"
#export CATALINA_OPTS="$CATALINA_OPTS -XX:MaxGCPauseMillis=200"
#export CATALINA_OPTS="$CATALINA_OPTS -XX:G1ReservePercent=20"

if [ -r "$CATALINA_BASE/bin/otelenv.sh" ]; then
  . "$CATALINA_BASE/bin/otelenv.sh"
fi
