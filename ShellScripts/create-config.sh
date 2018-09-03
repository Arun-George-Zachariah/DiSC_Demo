#!/bin/bash
#==============================================================================
#
#          FILE:  create-config.sh
#
#         USAGE:  ./create-config.sh -h
#
#   DESCRIPTION:  This script is used to generate the configuration file for 
#                 gossiping. It assumes global communication, master as "ctl"
#                 and all slaves "cp-x".
#
#       WARNING:  ---
#  REQUIREMENTS:  ---
#          BUGS:  ---
#         NOTES:  ---

#        AUTHOR:  Anas Katib, anaskatib@mail.umkc.edu
#   INSTITUTION:  University of Missouri-Kansas City
#       VERSION:  1.0
#       CREATED:  10/04/2017 11:00:00 AM CST
#      REVISION:  ---
#
#==============================================================================

scriptname=$0
MASTR="ctl"
SLVPREFX="cp-"

function usage {
    echo "USAGE: $scriptname -n <num-nodes> -l <lsh-l> -k <lsh-k> -f <families-file> -v <vars-file> -t <table-file>"
    echo "  -n <num-nodes>      number of nodes in the cluster (including the master)"
    echo "  -l <lsh-l>          number of groups fot tuning LSH"
    echo "  -k <lsh-k>          number of nodes that are assigned the same family"
    echo "  -f <families-file>  file that contains all the families to be gossiped"
    echo "  -v <vars-file>      file that contains the variables that were used to generate the families"
    echo "  -t <table-file>     input table used to calculate the family counters"
    echo "  -h                  print this message"
    exit 1
}

function aparse {
while [[ $# > 0 ]] ; do
  case "$1" in
    -n)
      NNODES=${2}
      shift
      ;;
    -l)
      LSHL=${2}
      ;;
    -k)
      LSHK=${2}
      ;;
    -f)
      FAMS=${2}
      ;;
    -v)
      VARS=${2}
      ;;
    -t)
      TBL=${2}
      ;;
 esac
  shift
done
}

# check if proper input is entered
if [[ ($# -eq 0) || ( $@ == *"-h") || ( $1 != "-n" ) || ( $3 != "-l" ) || ( $5 != "-k" ) || $7 != "-f"  || $9 != "-v" || $11 != "-t" ]] ; then
    usage
    exit 1
fi

aparse "$@"
set -e

echo -e "\nSCRIPT STARTED..\n"
echo -e "RUNNING WITH:\n    Number of nodes:" $NNODES "\n    LSH-K:" $LSHK "\n    Families:" $FAMS
echo -e "    Variables: "$VARS "\n    Table: "$TBL "\n"

echo "GETTING IP ADDRESSES.."
# get ips of all nodes in the cluster

#     master:
IP=$(ssh ctl '(hostname --ip-address)')
echo $IP > ips.txt

#     slaves
for (( n=1; n<$NNODES; n++ )) ; do
	IP=$(ssh cp-"$n" '(hostname --ip-address)')
	echo $IP >> ips.txt
done

echo "Generating default configuration arguments.."
echo "P1=P111
P2=P222
family_file=$FAMS
variables_file=$VARS
table_file=$TBL
K=5
R=RRR
EstLogLimit=LLL
delay_const=10
PackingFactor=DPF
ExtractionSize=IES
AlgorithmType=Sum
ReadStoredVals=False
ReadMembershipList=True
LocalMmbrCount=0
BlockSize=75
StopTime=1020
CompressDiscData=True
NumberOfTableSplits=8
GossipAllFamilies=False
CreateSplits=True
" > config.k$LSHK.txt

echo "GENERATING DESTINATION ADDRESSES"
python ../ips/ips.global.py ips.txt >> config.k$LSHK.txt

echo "ASSIGNING FAMILIES.."
python ../families/familier-lsh-ch.py $FAMS $LSHL $LSHK $NNODES >> config.k$LSHK.txt

rm ips.txt
echo "SCRIPT FINISHED."
exit 0